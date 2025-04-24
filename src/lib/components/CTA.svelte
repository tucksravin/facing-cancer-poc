<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { linear } from 'svelte/easing';
    import reddoor from '$lib/assets/images/reddoor.svg';
   
    let { isModalOpen, onClose } = $props();

   </script>


<style>

</style>
   
   {#if isModalOpen}
   <div 
     in:fade={{easing:linear, duration:600}}
     out:fade={{easing:linear, duration:600}} 
     class='fixed top-0 left-0 w-full h-full bg-black/20 z-20 flex justify-center items-center'>
     <div in:fly={{easing:linear, x:'100%', duration:600}}  class='bg-white/95 rounded-lg p-4 w-[92%] max-w-[1280px] max-h-5/6 px-5 py-8 flex flex-col gap-12 lg:px-12'>
       <div class='flex justify-between h-6'> 
         <img src={reddoor} alt="Reddoor logo" />
         <button 
           onclick={()=> {isModalOpen = false; onClose();}} 
           class="text-2xl text-light/150 hover:text-[#E31937] transition duration-300" 
           aria-label="close modal">
           <i class="fa-thin fa-close fa-lg"></i>
         </button>
       </div>
       <div>
         <p class='text-center md:px-24'>
           We're looking for the right partner to help bring the family and friends of cancer patients from a place of uncertainty to one of understanding. 
           <br/><br/>
           Contact Tim Holmes at Reddoor Creative for more information.
         </p>
       </div>
       <div class='flex justify-between w-full max-w-[400px] mx-auto'>
         <div class='flex flex-col justify-center items-center gap-3'>
           <a 
             href='tel:310.529.1631' 
             class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-[#888888] border-[#888888] border-2 text-white hover:text-[#E31937] hover:border-[#E31937] hover:bg-white transition duration-300" 
             aria-label="call">
             <i class="fa-sharp fa-mobile fa-2xl"></i>
           </a>
           <p class='text-sm'>Call</p>
         </div>
         <div class='flex flex-col justify-center items-center gap-3'>
           <a 
             href='mailto:info@reddoorla.com' 
             class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-[#888888] border-[#888888] border-2 text-white hover:text-[#E31937] hover:border-[#E31937] hover:bg-white transition duration-300" 
             aria-label="email">
             <i class="fa-sharp fa-envelope fa-2xl"></i>
           </a>
           <p class='text-sm'>Email</p>
         </div>
         <div class='flex flex-col justify-center items-center gap-3'>
           <a 
             href='https://reddoorla.com/' 
             class="z-10 cursor-pointer w-14 flex flex-col justify-center items-center h-14 rounded-full bg-[#888888] border-[#888888] border-2 text-white hover:text-[#E31937] hover:border-[#E31937] hover:bg-white transition duration-300" 
             aria-label="website">
             <i class="fa-sharp fa-globe fa-2xl"></i>
           </a>
           <p class='text-sm'>Website</p>
         </div>
       </div>
     </div>
   </div>
   {/if}