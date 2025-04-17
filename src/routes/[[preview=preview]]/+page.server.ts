import { redirect } from '@sveltejs/kit';
import { page } from '$app/state';
import { cancerSubtype } from '$lib/stores/cancerSubtype';
import { cancerType } from '$lib/stores/cancerType';

export function load() {
	if (page.url.searchParams.has('type')) {
		cancerType.set(page.url.searchParams.get('type') || '');
	  }
	  if (page.url.searchParams.has('subtype')) {
		cancerSubtype.set(page.url.searchParams.get('subtype') || '');
	  }
	redirect(308, '/hi');
}