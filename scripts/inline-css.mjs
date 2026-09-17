import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const htmlPath = resolve(dist, 'index.html');
const html = readFileSync(htmlPath, 'utf8');

const match = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!match) {
  console.warn('inline-css: no stylesheet link found in dist/index.html — skipping');
  process.exit(0);
}

const css = readFileSync(resolve(dist, match[1].replace(/^\//, '')), 'utf8');
const inlined = html.replace(match[0], `<style>\n${css}\n  </style>`);

writeFileSync(htmlPath, inlined);
rmSync(resolve(dist, match[1].replace(/^\//, '')), { force: true });

console.log(`inline-css: inlined ${match[1]} (${(css.length / 1024).toFixed(1)} kB) into index.html`);