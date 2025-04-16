<script>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import { cancerType } from '$lib/stores/cancerType';
	import { cancerSubtype } from '$lib/stores/cancerSubtype';
	import "../app.css";
  import LandscapeModal from '$lib/components/LandscapeModal.svelte';
  import { onMount } from 'svelte';
  import { beforeNavigate } from '$app/navigation';
  import { get } from 'svelte/store';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	onMount(()=>{
		if(page.url.searchParams.has('type')){
			cancerType.set(page.url.searchParams.get('type')||'');
		}

		if(page.url.searchParams.has('subtype')){
			cancerSubtype.set(page.url.searchParams.get('subtype')||'');
		}
	})

	// beforeNavigate((event)=>{
	// 	if(get(cancerType)!==''){
	// 		event.to?.params.type = get(cancerType);
	// 	}
	// })

</script>

<svelte:head>
	<title>Facing Cancer</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
</svelte:head>
<main class="w-screen h-screen bg-canvas ease-in-out duration-500">
	{@render children?.()}
</main>
<LandscapeModal />
<PrismicPreview {repositoryName} />
