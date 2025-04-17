export const prerender = 'auto';

export function load({ url, cookies }) {
    console.log('Layout server load:', url.pathname);
    console.log('Search params:', Object.fromEntries(url.searchParams.entries()));
    
    // Process parameters at the layout level without redirecting
    if (url.searchParams.has('type')) {
      const typeValue = url.searchParams.get('type') || '';
      console.log('Setting cancerType cookie to:', typeValue);
      cookies.set('cancerType', typeValue, { path: '/' });
    }
    
    if (url.searchParams.has('subtype')) {
      const subtypeValue = url.searchParams.get('subtype') || '';
      console.log('Setting cancerSubtype cookie to:', subtypeValue);
      cookies.set('cancerSubtype', subtypeValue, { path: '/' });
    }
    
    // Always return cookie values to be available in all routes
    return {
      cancerType: cookies.get('cancerType') || '',
      cancerSubtype: cookies.get('cancerSubtype') || ''
    };
  }