<template>
    <div class="card">
        <Accordion :activeIndex="0" multiple="false" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" >
            <AccordionTab :header="header" :pt="{
                root:{class:'text-[#111] shadow-xl overflow-hidden my-4'},
                header:{class:'group'},
                headeraction:{class:'bg-white !font-extrabold flex align-center justify-between'},
                headericon:{class:'order-2 !font-extrabold text-black group-hover:opacity-60'},
                headertitle:{class:'!font-extrabold text-black group-hover:opacity-60'},
            }">
                <!-- <slot name="description" /> -->
                <ContentSlot :use="$slots.description" unwrap="p" />
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
defineProps({header: String});
</script>