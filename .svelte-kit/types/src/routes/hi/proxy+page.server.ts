// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = ({ cookies }: Parameters<PageServerLoad>[0]) => {
  // Get values from cookies to pass to the client
  return {
    cancerType: cookies.get('cancerType') || '',
    cancerSubtype: cookies.get('cancerSubtype') || ''
  };
};