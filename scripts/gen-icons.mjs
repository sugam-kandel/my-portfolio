import { readFileSync, writeFileSync } from 'node:fs';
import { inflateSync, deflateSync } from 'node:zlib';

const SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const BG = [5, 6, 15];

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const name = Buffer.from(type, 'ascii');
  const head = Buffer.alloc(4);
  head.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([head, name, data, crc]);
}

function decodePNG(buf) {
  let pos = 8, w = 0, h = 0, ct = 0, idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') { w = data.readUInt32BE(0); h = data.readUInt32BE(4); ct = data[9]; }
    if (type === 'IDAT') idat.push(data);
    pos += 12 + len;
  }
  if (ct !== 6) throw new Error(`gen-icons: unsupported color type ${ct}`);
  const raw = inflateSync(Buffer.concat(idat));
  const bpp = 4, stride = w * bpp;
  const px = Buffer.alloc(stride * h);
  for (let y = 0, yo = 0; y < h; y++) {
    const f = raw[y * (stride + 1)];
    const row = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    const prev = y ? px.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? px[yo + x - bpp] : 0;
      const b = prev ? prev[x] : 0;
      const c = x >= bpp && prev ? prev[x - bpp] : 0;
      let v = row[x];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      px[yo + x] = v & 0xff;
    }
    yo += stride;
  }
  return { w, h, px };
}

function encodePNG(w, h, px) {
  const stride = w * 4;
  const rows = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    rows[y * (stride + 1)] = 0;
    px.copy(rows, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([SIG, chunk('IHDR', ihdr), chunk('IDAT', deflateSync(rows, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

function rangeCoverage(size, out, factor) {
  const map = [];
  for (let o = 0; o < out; o++) {
    const start = o * factor, end = (o + 1) * factor;
    const parts = [];
    for (let i = Math.floor(start); i < Math.min(size, Math.ceil(end)); i++) {
      const w = Math.min(end, i + 1) - Math.max(start, i);
      if (w > 0) parts.push([i, w]);
    }
    map.push(parts);
  }
  return map;
}

function downscale(src, outW, outH) {
  const fw = src.w / outW, fh = src.h / outH;
  const xs = rangeCoverage(src.w, outW, fw), ys = rangeCoverage(src.h, outH, fh);
  const dst = Buffer.alloc(outW * outH * 4);
  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const r = [0, 0, 0, 0];
      let tot = 0;
      for (const [iy, wy] of ys[y]) {
        for (const [ix, wx] of xs[x]) {
          const w = wx * wy, o = (iy * src.w + ix) * 4;
          tot += w;
          for (let c = 0; c < 4; c++) r[c] += src.px[o + c] * w;
        }
      }
      const o = (y * outW + x) * 4;
      for (let c = 0; c < 4; c++) dst[o + c] = Math.round(r[c] / tot);
    }
  }
  return { w: outW, h: outH, px: dst };
}

// Composite the transparent logo onto the site's dark background so it is
// visible on light/white surfaces (Google's favicon badge, light browser tabs).
function onBg(src) {
  const px = Buffer.alloc(src.w * src.h * 4);
  for (let i = 0; i < src.w * src.h; i++) {
    const a = src.px[i * 4 + 3] / 255;
    px[i * 4] = Math.round(BG[0] * (1 - a) + src.px[i * 4] * a);
    px[i * 4 + 1] = Math.round(BG[1] * (1 - a) + src.px[i * 4 + 1] * a);
    px[i * 4 + 2] = Math.round(BG[2] * (1 - a) + src.px[i * 4 + 2] * a);
    px[i * 4 + 3] = 255;
  }
  return { w: src.w, h: src.h, px };
}

const master = onBg(decodePNG(readFileSync('scripts/favicon-source.png')));

for (const size of [16, 32, 192]) {
  const icon = downscale(master, size, size);
  writeFileSync(`public/favicon-${size}x${size}.png`, encodePNG(size, size, icon.px));
}

function writeIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach((e, i) => {
    dir[i * 16] = e.size >= 256 ? 0 : e.size;
    dir[i * 16 + 1] = e.size >= 256 ? 0 : e.size;
    dir.writeUInt16LE(1, i * 16 + 4);
    dir.writeUInt16LE(32, i * 16 + 6);
    dir.writeUInt32LE(e.buf.length, i * 16 + 8);
    dir.writeUInt32LE(offset, i * 16 + 12);
    offset += e.buf.length;
  });
  return Buffer.concat([header, dir, ...entries.map((e) => e.buf)]);
}

const ico = writeIco([
  { size: 16, buf: readFileSync('public/favicon-16x16.png') },
  { size: 32, buf: readFileSync('public/favicon-32x32.png') },
]);
writeFileSync('public/favicon.ico', ico);

console.log('gen-icons: wrote favicon-16x16.png, favicon-32x32.png, favicon-192x192.png (dark bg) and favicon.ico');