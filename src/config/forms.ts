export const WEB3FORMS_ACCESS_KEY = '2878498d-f729-454d-ba1a-6d665949767a';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: data.name,
      email: data.email,
      subject: data.subject || 'New Contact Message',
      message: data.message,
      from_name: data.name,
      reply_to: data.email,
      botcheck: '',
    }),
  });
  const json = await res.json();
  return { success: json.success === true, message: json.message };
}