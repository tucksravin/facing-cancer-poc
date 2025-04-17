<script lang='ts'>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { cancerType } from "$lib/stores/cancerType";
    import { cancerSubtype } from "$lib/stores/cancerSubtype";

    const props = $props<{
    data: {
      cancerType: string;
      cancerSubtype: string;
    }
  }>();

   
  
    let slide = $state(0);
    let manual = $state(false);
    let progress = $state(0);
    let progressInterval: NodeJS.Timeout;
    let delayTimeout: NodeJS.Timeout;
    const slideTime = 4000; // Time between slides in ms
    const progressStep = 10; // Update progress every 10ms
    const transitionDelay = 1000; // Delay in ms before progress bar starts filling

    const startSlides = () => {
        // Reset progress
        progress = 0;
        
        // Clear any existing intervals/timeouts
        clearInterval(progressInterval);
        clearTimeout(delayTimeout);
        
        // Add delay before starting progress animation to allow text transitions to complete
        delayTimeout = setTimeout(() => {
            progressInterval = setInterval(() => {
                if (!manual) {
                    // Adjust the calculation to account for the delay
                    progress += (progressStep / (slideTime - transitionDelay)) * 100;
                    if (progress >= 100) {
                        progress = 0;
                        slide++;
                        if (slide >= 4) {
                            clearInterval(progressInterval);
                        } else {
                            // Reset for the next slide
                            startSlides();
                        }
                    }
                }
            }, progressStep);
        }, transitionDelay);
    };
  
    onMount(() => {
        cancerType.set(props.data.cancerType);
        cancerSubtype.set(props.data.cancerSubtype);

        setTimeout(() => {
            slide++;
            startSlides();
        }, 400);
        
        // Clean up interval on component destroy
        return () => {
            clearInterval(progressInterval);
            clearTimeout(delayTimeout);
        };
    });
    
    // Handle manual navigation
    function goToSlide(newSlide: number) {
        slide = newSlide;
        manual = true;
        clearInterval(progressInterval);
        clearTimeout(delayTimeout);
    }
</script>
  
<section class="w-full h-full flex flex-col justify-center items-center gap-12">
    <div>
        {#if slide === 1}
            <p in:fly={{y:'10vh', duration:500}} out:fly={{y:'-10vh', duration:500}}>Hi. We're here to help.</p>
        {/if}
    </div>
    <div class='h-36 lg:h-64 text-center relative w-full'>
        {#if slide===1}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <h2 in:fly={{y:'10vh', duration:500, delay:100}} out:fly={{y:'-10vh', duration:500}}>Your loved one is </h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:100}} out:fly={{y:'-10vh', duration:500}} class='text-primary'>facing cancer.</h2>
            </div>
        {:else if slide===2}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>We're so sorry to</h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>hear that</h2>
            </div>
        {:else if slide===3}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>A cancer diagnosis can  </h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>be scary and the future</h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>feels uncertain...</h2>
            </div>
        {:else if slide===4}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>...and there's so much to </h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}}>try and understand.</h2>
                <h2 in:fly={{y:'10vh', duration:500, delay:600}} out:fly={{y:'-10vh', duration:500}} class='text-primary'>We are here to help.</h2>
            </div>
        {/if}
    </div>
    <div>
        {#if slide===1}
        <div class='bump'>
            <button in:fly={{y:'10vh', duration:500, delay:200}} out:fly={{y:'-10vh', duration:500}} onclick={() => {slide++; manual = false; startSlides();}} class="w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition duration-500" aria-label="next slide">
                <i class="fa-light fa-arrow-right fa-2xl"> </i>
            </button>
        </div>
        {:else if slide===4}
        <div class='bump'>
            <a in:fly={{y:'10vh', duration:500, delay:2000}} out:fly={{y:'-10vh', duration:500}} href='/confirm' class="flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition duration-500" aria-label="next slide">
                <i class="fa-light fa-arrow-right fa-2xl"> </i>
            </a>
        </div>
        {/if}
    </div>
    {#if slide > 1}
        <div in:fly={{y:'10vh', duration:500, delay:700}} class='flex items-center justify-center gap-5 absolute left-1/2 -translate-x-1/2 bottom-13 {slide > 3 ? "pointer-events-none opacity-0 transition-opacity delay-1200" : ""}'>
            <!-- Progress indicators using translation instead of width -->
            <div class='relative h-2.5 w-13 bg-white rounded-full overflow-hidden'>
                <div class='absolute h-full w-full bg-light rounded-full origin-left' 
                     style="transform: translateX(0%)"></div>
                <button class='absolute inset-0 z-10' onclick={() => goToSlide(2)} aria-label='set slide to 2'></button>
            </div>
            <div class='relative h-2.5 w-13 bg-white rounded-full overflow-hidden'>
                <div class='absolute h-full w-full bg-light rounded-full origin-left'
                     style="transform: translateX(-{slide === 2 ? 100 - progress : slide < 2 ? 100 : 0}%)"></div>
                <button class='absolute inset-0 z-10' onclick={() => goToSlide(3)} aria-label='set slide to 3'></button>
            </div>
            <div class='relative h-2.5 w-13 bg-white rounded-full overflow-hidden'>
                <div class='absolute h-full w-full bg-light rounded-full origin-left'
                     style="transform: translateX(-{slide === 3 ? 100 - progress : slide < 3 ? 100 : 0}%)"></div>
                <button class='absolute inset-0 z-10' onclick={() => goToSlide(4)} aria-label='set slide to 4'></button>
            </div>
        </div>
    {/if}
</section>