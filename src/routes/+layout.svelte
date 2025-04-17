<script lang='ts'>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import { cancerType } from '$lib/stores/cancerType';
	import { cancerSubtype } from '$lib/stores/cancerSubtype';
	import "../app.css";
	import LandscapeModal from '$lib/components/LandscapeModal.svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import TriggerTransitionOnMount from '$lib/components/Animation/TriggerTransitionOnMount.svelte';
	import breastImage from '$lib/assets/images/Breast.png';
	import leukemiaImage from '$lib/assets/images/Leukemia.png';
	import lungImage from '$lib/assets/images/Lung.png';
	import brainImage from '$lib/assets/images/glioblastoma.png';


  let { children, data } = $props();
  
	// Create an array of image sources
	const imagesToPreload = [breastImage, leukemiaImage, lungImage, brainImage];
	
	// Function to preload images
	function preloadImages() {
	  imagesToPreload.forEach(src => {
		const img = new Image();
		img.src = src;
	  });
	}
	
	// Initialize from URL and set up store syncing
	onMount(() => {
	  preloadImages();
	  
	  // Set initial values from URL if they exist
	  if (page.url.searchParams.has('type')||data.cancerType) {
		cancerType.set(page.url.searchParams.get('type') || data.cancerType);
	  }
	  if (page.url.searchParams.has('subtype')||data.cancerSubtype) {
		cancerSubtype.set(page.url.searchParams.get('subtype') || data.cancerSubtype);
	  }

	  
	}
	);

   </script>
   
   <svelte:head>
	<title>Facing Cancer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
   </svelte:head>
   
   <main class="h-dvh w-dvw bg-canvas ease-in-out duration-500">
	<TriggerTransitionOnMount>
	  {@render children?.()}
	</TriggerTransitionOnMount>
   </main>
   
   <LandscapeModal />
   <PrismicPreview {repositoryName} />