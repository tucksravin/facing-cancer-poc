<script lang="ts">
    import StyledSingleSelect from "./StyledSingleSelect.svelte";
    import DefaultButton from "../Buttons/DefaultButton.svelte";


    let { PRODUCTS = ["Apples", "Bananas", "Clementines"] } = $props();

    
    let form:HTMLFormElement|undefined = $state();

    let submit = () => {if(form)form.submit()};

    let selectValue=$state("");

//TODO: add hidden form and bind values to make this always work even if it is hidden by default
</script>


<form class="w-full flex flex-col gap-4" name="contact" method="post" bind:this={form} netlify netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />

        <div class="flex flex-col md:flex-row text-light items-center justify-center w-full">
            <div class="flex items-center justify-center w-full translate-x-[6px]">
                <i class="fa-regular fa-envelope h-6 mt-[7px] -mr-8 z-10"></i>
                <input class="w-full border-[1px] rounded-[3px] text-dark border-light h-10 pl-10 pt-[2.5px]" name="email" placeholder="Email" type="email"/>
            </div>
        </div>
        <StyledSingleSelect placeholder="Select product" items={PRODUCTS} bind:value={selectValue}/>
        <input name="select" type="select" bind:value={selectValue} hidden />

        <textarea class="border-[1px] rounded-[3px] text-dark border-light h-48 pl-4 pt-[2.5px]" placeholder="Type something..." name="message"></textarea>

        <div class="w-16">
            <DefaultButton onclick={submit} class="">Submit</DefaultButton>
        </div>
        
</form>
