<script lang='ts'>
import breast from '$lib/assets/images/Breast.png';
  import { fade, fly } from 'svelte/transition';



</script>

    <section in:fly={{x:"100%"}} out:fade class="w-full h-full flex flex-col justify-center items-center gap-10 bg-dark text-white text-center relative overflow-hidden">
        <div class="absolute bottom-0 left-0 -translate-x-1/3 lg:-translate-x-1/5 lg:translate-y-1/5 w-full lg:w-1/2">
            <img src={breast} alt="breast" class="w-full" />
        </div>

        <p class='z-10'>Let's Talk About</p>
        <h1 class='z-10 px-12'>Breast Cancer</h1>
        <div class='bump z-10'>
            <div class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white transition duration-300" aria-label="next slide">
                <i class="fa-light fa-arrow-right fa-2xl"> </i>
            </div>
        </div>
        
        
    </section>
