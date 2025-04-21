<script lang='ts'>
    import breast from '$lib/assets/images/Breast.png';
    import leukemia from '$lib/assets/images/Leukemia.png';
    import lung from '$lib/assets/images/Lung.png';
    import brain from '$lib/assets/images/glioblastoma.png';
    import TriggerTransitionOnMount from '$lib/components/Animation/TriggerTransitionOnMount.svelte';
    import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
    import { cancerSubtype } from '$lib/stores/cancerSubtype';
    import { fly, fade } from 'svelte/transition';
    import { quadOut, quadIn } from 'svelte/easing';

    // Define cancer type information
    const cancerTypes = [
      { id: 'gbm', name: 'Brain Cancer', subtype: 'Glioblastoma Multiforme (GBM)', image: brain, route: 'brain' },
      { id: 'aml', name: 'Leukemia', subtype: 'Acute Myeloid Leukemia', image: leukemia, route: 'leukemia' },
      { id: 'sclc', name: 'Lung Cancer', subtype: 'Small Cell Lung Cancer', image: lung, route: 'lung' },
      { id: 'tnbc', name: 'Breast Cancer', subtype: 'Triple Negative Breast Cancer', image: breast, route: 'breast' }
    ];
    
    // Find the current cancer type from the store
    $: currentCancer = cancerTypes.find(type => type.id === $cancerSubtype) || null;
</script>

<section class="w-full h-full">
    <ContentWidth class="h-full flex flex-col justify-center items-center gap-12">
        <TriggerTransitionOnMount>
            <h2 in:fly={{easing:quadOut, y:'10vh', duration:1200}} out:fly={{easing:quadOut, y:'-10vh', duration:600}}>Let's Get Started</h2>
        </TriggerTransitionOnMount>
        
        {#if currentCancer}
        <div class='flex flex-col justify-center items-center gap-8 text-center'>
            <TriggerTransitionOnMount>
                <p in:fly={{easing:quadOut, y:'10vh', duration:1200, delay:200}} out:fly={{easing:quadOut, y:'-10vh', duration:600}}>Based on your link, this is your loved one's diagnosis.</p>
            </TriggerTransitionOnMount>
            <TriggerTransitionOnMount>
                <div in:fly={{easing:quadOut, y:'10vh', duration:1200, delay:400}} out:fly={{easing:quadOut, y:'-10vh', duration:600}} class='bg-dark h-64 w-64 rounded-full flex justify-center items-center'>
                    <img src={currentCancer.image} alt={currentCancer.name.toLowerCase()} class='h-5/6 w-5/6' />
                </div>
            </TriggerTransitionOnMount>
            <TriggerTransitionOnMount>
                <div in:fly={{easing:quadOut, y:'10vh', duration:1200, delay:600}} out:fly={{easing:quadOut, y:'-10vh', duration:600}} class='flex flex-col justify-center items-center gap-1'>
                    <h4>{currentCancer.name}</h4>
                    <h6>{currentCancer.subtype}</h6>
                </div>
            </TriggerTransitionOnMount>
            <TriggerTransitionOnMount>
                <div in:fly={{easing:quadOut, y:'10vh', duration:1200, delay:800}} out:fly={{easing:quadOut, y:'-10vh', duration:600}} class='flex flex-row gap-12'>
                    <div class='bump'>
                    <a href='/choose' class="flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition duration-500" aria-label="choose a different cancer">
                        <i class="fa-light fa-close fa-2xl"> </i>
                    </a>
                    </div>
                    <div class='bump'>
                    <a href={'/' + currentCancer.route} class="flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition duration-500" aria-label="continue">
                        <i class="fa-light fa-arrow-right fa-2xl"> </i>
                    </a>
                    </div>
                </div>
            </TriggerTransitionOnMount>
        </div>
        {:else}
        <TriggerTransitionOnMount>
            <div in:fly={{easing:quadOut, y:'10vh', duration:1200, delay:100}} out:fly={{easing:quadOut, y:'-10vh', duration:600}}>
                <div class='bump'>
                <a href='/choose' class="flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition duration-500" aria-label="next slide">
                    <i class="fa-light fa-arrow-right fa-2xl"> </i>
                </a>
                </div>
            </div>
        </TriggerTransitionOnMount>
        {/if}
    </ContentWidth>
</section>