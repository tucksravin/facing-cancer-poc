<script lang='ts'>


	let viewpoortWidth=$state(1024)

</script>


<svelte:window bind:innerWidth={viewpoortWidth} />

<section class="w-full h-full flex flex-col justify-center items-center gap-12">
	<a href='/hi' class="bump w-14 flex flex-col justify-center items-center h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white transition" aria-label="next slide">
		<i class="fa-light fa-arrow-right fa-2xl"> </i>
	</a>
</section>
