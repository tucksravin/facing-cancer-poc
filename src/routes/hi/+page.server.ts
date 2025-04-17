import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  // Get values from cookies to pass to the client
  return {
    cancerType: cookies.get('cancerType') || '',
    cancerSubtype: cookies.get('cancerSubtype') || ''
  };
};