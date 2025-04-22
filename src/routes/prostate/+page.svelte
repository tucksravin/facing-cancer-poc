<script lang='ts'>
    import Prostate from '$lib/assets/images/Prostate.png';
  import { fade, fly } from 'svelte/transition';
  import { quadOut, quadIn } from 'svelte/easing';

  import Cta from '$lib/components/CTA.svelte';


  let isModalOpen = $state(false);
  let onClose = () => isModalOpen = false;



</script>

<Cta {isModalOpen} {onClose}/>


    <section in:fly={{easing:quadOut, x:'100%', duration:600}} out:fade={{easing:quadIn, duration:600}} class="w-full h-full flex flex-col justify-center items-center gap-10 bg-dark text-white text-center relative overflow-hidden">
        <div class="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[200%] lg:w-[120%] lg:opacity-80 lg:rotate-90">
            <img src={Prostate} alt="Prostate" class="w-full" />
        </div>

        <p class='z-10'>Let's Talk About</p>
        <h1 class='z-10 px-12'>Prostate Cancer</h1>
        <div class='bump z-10'>
        <button onclick={()=>isModalOpen=true} class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white transition duration-300" aria-label="next slide">
            <i class="fa-light fa-arrow-right fa-2xl"> </i>
        </button>
        </div>
        
        
    </section>
