<script lang='ts'>
    import breast from '$lib/assets/images/Breast.png';
    import leukemia from '$lib/assets/images/Leukemia.png';
    import lung from '$lib/assets/images/Lung.png';
    import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import { cancerSubtype } from '$lib/stores/cancerSubtype';
</script>


<section class="w-full h-full">
    <ContentWidth class="h-full flex flex-col justify-center items-center gap-12">
    <h2>Let's Get Started</h2>
    {#if $cancerSubtype==='aml'||$cancerSubtype==='sclc'}
    <div class='flex flex-col justify-center items-center gap-8 text-center'>
        <p>Based on your link, we think this is the cancer your loved one is facing.</p>
        <div class='bg-dark h-64 w-64 rounded-full flex justify-center items-center'>
            {#if $cancerSubtype==='aml'}
                <img src={leukemia} alt='leukemia' class='h-5/6 w-5/6' />
            {:else if $cancerSubtype==='sclc'}
                <img src={lung} alt='lung' class='h-5/6 w-5/6' />
            {/if}
        </div>
        <div class='flex flex-col justify-center items-center gap-1'>
            {#if $cancerSubtype==='aml'}
                <h4>Leukemia</h4>
                <h6>Acute Myeloid Leukemia</h6>
            {:else if $cancerSubtype==='sclc'}
                <h4>Lung Cancer</h4>
                <h6>Small Cell Lung Cancer</h6>
            {/if}

        </div>
        <div class='flex flex-row gap-12'>
            <a href='/choose' class="bump flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition" aria-label="next slide">
                <i class="fa-light fa-close fa-2xl"> </i>
            </a>
            <a href='/{$cancerSubtype==='aml'?'leukemia':'lung'}' class="bump flex items-center justify-center w-14 h-14 rounded-full bg-primary border-primary border-2 text-white hover:text-primary hover:bg-white active:text-white active:bg-primary transition" aria-label="next slide">
                <i class="fa-light fa-arrow-right fa-2xl"> </i>
            </a>
        </div>
    </div>
    {/if}
    </ContentWidth>
</section>