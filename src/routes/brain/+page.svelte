<script lang='ts'>
    import Brain from '$lib/assets/images/glioblastoma.png';
  import { fade, fly } from 'svelte/transition';



</script>

    <section in:fly={{x:"100%"}} out:fade class="w-full h-full flex flex-col justify-center items-center gap-10 bg-dark text-white text-center relative overflow-hidden">
        <div class="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[200%] lg:w-[120%] lg:opacity-80 lg:rotate-90">
            <img src={Brain} alt="Brain" class="w-full" />
        </div>

        <p class='z-10'>Let's Talk About</p>
        <h1 class='z-10 px-12'>Brain Cancer</h1>
        <div class='bump z-10'>
        <div class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white transition duration-300" aria-label="next slide">
            <i class="fa-light fa-arrow-right fa-2xl"> </i>
        </div>
        </div>
        
        
    </section>
