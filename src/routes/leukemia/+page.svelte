<script lang='ts'>
    import leukemia from '$lib/assets/images/Leukemia.png';
  import { fade, fly } from 'svelte/transition';
  import { quadOut, quadIn } from 'svelte/easing';




  import Cta from '$lib/components/CTA.svelte';


  let isModalOpen = $state(false);
  let onClose = () => isModalOpen = false;



</script>

<Cta {isModalOpen} {onClose}/>

    <section in:fly={{easing:quadOut, x:'100%', duration:600}} out:fade={{easing:quadIn, duration:600}}  class="w-full h-full flex flex-col justify-center items-center gap-10 bg-dark text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/6 rotate-270 w-2/3">
            <img src={leukemia} alt="Leukemia" class="w-full h-auto" />
        </div>
        <div class="absolute bottom-[10%] left-0 -translate-x-1/2 -translate-y-1/6 w-2/3">
            <img src={leukemia} alt="Leukemia" class="w-full h-auto" />
        </div>
        <div class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/6 rotate-[250deg] w-2/3">
            <img src={leukemia} alt="Leukemia" class="w-full h-auto" />
        </div>
        <div class="absolute top-0 right-0 translate-x-3/4 translate-y-1/3 -rotate-30 w-2/3">
            <img src={leukemia} alt="Leukemia" class="w-full h-auto" />
        </div>

        <p class='z-10'>Let's Talk About</p>
        <h1 class='z-10'>Leukemia</h1>
        <div class='bump z-10'>
            <button onclick={()=>isModalOpen=true} class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white transition duration-300" aria-label="next slide">
                <i class="fa-light fa-arrow-right fa-2xl"> </i>
            </button>
        </div>
        
        
    </section>
