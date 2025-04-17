import { redirect } from '@sveltejs/kit';

export function load({ params, url, cookies }) {
  // Store values in cookies instead of directly in the store
  if (url.searchParams.has('type')) {
    cookies.set('cancerType', url.searchParams.get('type') || '', { path: '/' });
  }
  
  if (url.searchParams.has('subtype')) {
    cookies.set('cancerSubtype', url.searchParams.get('subtype') || '', { path: '/' });
  }
  
  console.log(cookies)
  console.log('hi')

  // Redirect after setting cookies
  throw redirect(308, '/hi');
}

