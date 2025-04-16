<script lang='ts'>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
  
      let slide = $state(0);
      let manual = $state(false);
  
      const startSlides = () => {
          setTimeout(()=>{
              if(!manual){
                  slide++;
                  if(slide<4)
                      startSlides()
                  }
              }, 4000);
          
      }
  
      onMount(()=>{
          setTimeout(()=>{
              slide++;
          }, 400
      )
      })
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
              <button in:fly={{y:'10vh', duration:500, delay:200}} out:fly={{y:'-10vh', duration:500}} onclick={()=>{slide++;startSlides();}} class="bump w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition" aria-label="next slide">
                  <i class="fa-light fa-arrow-right fa-2xl"> </i>
              </button>
          {:else if slide===4}
              <a in:fly={{y:'10vh', duration:500, delay:2000}} out:fly={{y:'-10vh', duration:500}} href='/confirm' class="bump flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition" aria-label="next slide">
                  <i class="fa-light fa-arrow-right fa-2xl"> </i>
              </a>
          {/if}
      </div>
      {#if slide>1}
          <div in:fly={{y:'10vh', duration:500, delay:700}} class='flex items-center justify-center gap-5 absolute left-1/2 -translate-x-1/2 bottom-13 {slide>3?'pointer-events-none opacity-0 transition-opacity delay-1200':''}'>
              <button class='h-2.5 w-13 bg-light hover:bg-primary active:bg-primary rounded-full' onclick={()=>{slide=2; manual=true;}} aria-label='set slide to 2'></button>
              <button class='h-2.5 w-13 transition duration-700 delay-300 {slide>2?'bg-light':'bg-white'} hover:bg-primary active:bg-primary rounded-full' onclick={()=>{slide=3; manual=true;}} aria-label='set slide to 3'></button>
              <button class='h-2.5 w-13 transition duration-700 delay-300 {slide>3?'bg-light':'bg-white'} hover:bg-primary active:bg-primary rounded-full' onclick={()=>{slide=4; manual=true;}} aria-label='set slide to 4'></button>
          </div>
      {/if}
  </section>