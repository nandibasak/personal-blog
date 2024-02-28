import { env } from '@/validations/env';

export async function useCms(query: string) {
  const res = await fetch(env.HYGRAPH_API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.HYGRAPH_API_TOKEN}`,
    },
    method: 'POST',
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    console.log(res.statusText);
    throw new Error(`Fetch Error: ${res.statusText}`);
  }

  const jsonData = await res.json();

  return jsonData.data;
}
