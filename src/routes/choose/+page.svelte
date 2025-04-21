<script lang='ts'>
  import breast from '$lib/assets/images/Breast.png';
  import leukemia from '$lib/assets/images/Leukemia.png';
  import lung from '$lib/assets/images/Lung.png';
  import brain from '$lib/assets/images/glioblastoma.png';
  import TriggerTransitionOnMount from '$lib/components/Animation/TriggerTransitionOnMount.svelte';
  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import { cancerSubtype } from '$lib/stores/cancerSubtype';
  import { fly, fade, slide } from 'svelte/transition';
  import { swipe } from "svelte-gestures";
  import type { SwipePointerEventDetail } from "svelte-gestures";
  
  // Cancer types data
  const cancerTypes = [
    { id: 'gbm', name: 'Brain', subtype: 'Glioblastoma Multiforme (GBM)', image: brain, route: 'brain' },
    { id: 'aml', name: 'Leukemia', subtype: 'Acute Myeloid Leukemia', image: leukemia, route: 'leukemia' },
    { id: 'sclc', name: 'Lung', subtype: 'Small Cell Lung Cancer', image: lung, route: 'lung' },
    { id: 'tnbc', name: 'Breast', subtype: 'Triple Negative Breast Cancer', image: breast, route: 'breast' }
  ];
  
  // Current index for the slider
  let currentIndex = 0;
  let previousIndex = 0;
  
  // Direction of slide transition
  let direction = 1;
  
  // Update cancer subtype when slider changes
  $: {
    // Set direction for animation
    direction = currentIndex > previousIndex ? 1 : -1;
    previousIndex = currentIndex;
    
    // Update store
    $cancerSubtype = cancerTypes[currentIndex].id;
  }
  
  // Handle slider movement
  function nextSlide() {
    if (currentIndex < cancerTypes.length - 1) {
      currentIndex++;
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }
  
  // Handle progress bar click
  function handleProgressBarClick(e: MouseEvent) {
    const progressBar = e.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentageClicked = clickPosition / rect.width;
    const newIndex = Math.floor(percentageClicked * cancerTypes.length);
    
    // Ensure index is within bounds
    currentIndex = Math.max(0, Math.min(cancerTypes.length - 1, newIndex));
  }
  
  // Progress bar dragging variables and functions
  let isDragging = false;
  
  function startDrag(e: MouseEvent) {
    isDragging = true;
    updateDragPosition(e);
  }
  
  function updateDragPosition(e: MouseEvent) {
    if (!isDragging) return;
    
    const progressBar = document.querySelector('.progress-bar-container') as HTMLElement;
    if (!progressBar) return;
    
    const rect = progressBar.getBoundingClientRect();
    const dragPosition = e.clientX - rect.left;
    const percentageDragged = dragPosition / rect.width;
    const newIndex = Math.floor(percentageDragged * cancerTypes.length);
    
    // Ensure index is within bounds
    currentIndex = Math.max(0, Math.min(cancerTypes.length - 1, newIndex));
  }
  
  function endDrag() {
    isDragging = false;
  }
  
  // Handle swipe gestures
  const handleSwipe = (e: CustomEvent<SwipePointerEventDetail>) => {
    if (e.detail.direction === "left") {
      nextSlide();
    }
    
    if (e.detail.direction === "right") {
      prevSlide();
    }
  }
  
</script>
 
<section class="w-full h-full relative" use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60 })} onswipe={handleSwipe}>
<ContentWidth class="h-full flex flex-col justify-center items-center gap-12">
  <TriggerTransitionOnMount>
    <h2 in:fly={{y:'10vh', duration:500}}>Let's Get Started</h2>
  </TriggerTransitionOnMount>
  
  <div class='flex flex-col justify-center items-center gap-8 text-center'>
    <TriggerTransitionOnMount>
      <p in:fly={{y:'10vh', duration:500, delay:200}}>Which type of cancer are we facing?</p>
    </TriggerTransitionOnMount>
    
    <!-- Slider container -->
    <TriggerTransitionOnMount>
      <div in:fly={{y:'10vh', duration:500, delay:400}} class="w-full max-w-xl">
        <div class="relative">
          <!-- Cancer image display container -->
          <div class="relative h-64 w-64 mx-auto">
            {#each cancerTypes as cancer, index}
              {#if index === currentIndex}
                <div 
                  in:fade={{duration: 300, delay: 100}} 
                  out:fade={{duration: 300}}
                  class="absolute top-0 left-0 right-0 bottom-0 bg-purple-900 rounded-full flex justify-center items-center"
                >
                  <a href={'/' + cancer.route} class="h-5/6 w-5/6 flex items-center justify-center">
                    <img 
                      in:fade={{duration: 400, delay: 200}} 
                      src={cancer.image} 
                      alt={cancer.name} 
                      class="h-full w-full" 
                    />
                  </a>
                </div>
              {/if}
            {/each}
          </div>
          
          <!-- Cancer type info container -->
          <div class="relative h-20 my-4 z-0">
            {#each cancerTypes as cancer, index}
              {#if index === currentIndex}
                <div 
                  in:fade={{duration: 300, delay: 300}} 
                  out:fade={{duration: 200}}
                  class="absolute w-full flex flex-col justify-center items-center gap-1"
                >
                  <h1 
                    in:fade={{duration: 300, delay: 350}} 
                  >
                    {cancer.name}
                  </h1>
           
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </TriggerTransitionOnMount>
  </div>

  <TriggerTransitionOnMount>
    <div class="fixed lg:hidden top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 items-center gap-4 w-screen z-10" in:fly={{y:'10vh', duration:500, delay:600}}>
      <div>
        <button 
          onclick={prevSlide} 
          class="flex items-center justify-center rounded-full text-light hover:text-primary transition"
          disabled={currentIndex === 0}
          class:hidden={currentIndex === 0}
          aria-label="previous slide"
        >
          <i class="fa-light fa-chevron-left fa-2xl"></i>
        </button>
      </div>
      <div>
        <button 
          onclick={nextSlide} 
          class="flex items-center justify-center rounded-full text-light hover:text-primary transition"
          disabled={currentIndex === cancerTypes.length - 1}
          class:hidden={currentIndex === cancerTypes.length - 1}
          aria-label="next slide"
        >
          <i class="fa-light fa-chevron-right fa-2xl"></i>
        </button>
      </div>
    </div>
  </TriggerTransitionOnMount>
  
  <!-- Progress bar fixed to bottom -->
  <TriggerTransitionOnMount>
    <div class="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-10" in:fly={{y:'10vh', duration:500, delay:600}}>
      <button 
        onclick={prevSlide} 
        class="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-light hover:text-primary transition"
        disabled={currentIndex === 0}
        aria-label="previous slide"
      >
        <i class="fa-light fa-chevron-left fa-xl"></i>
      </button>
      
      <!-- Interactive Progress bar -->
      <div 
        class="progress-bar-container w-64 h-2 bg-white rounded-full overflow-hidden cursor-pointer"
        onclick={handleProgressBarClick}
        onmousedown={startDrag}
        onmousemove={updateDragPosition}
        onmouseup={endDrag}
        onmouseleave={endDrag}
        aria-hidden="true"

      >
        <div class="h-full bg-light rounded-full transition-transform duration-500 ease-out" 
             style="width: {100/cancerTypes.length}%; transform:translateX({100*currentIndex}%)">
        </div>
      </div>
      
      <button 
        onclick={nextSlide} 
        class="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-light hover:text-primary transition"
        disabled={currentIndex === cancerTypes.length - 1}
        aria-label="next slide"
      >
        <i class="fa-light fa-chevron-right fa-xl"></i>
      </button>
    </div>
  </TriggerTransitionOnMount>
</ContentWidth>
</section>