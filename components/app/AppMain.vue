<template>
    <div class="absolute -z-10 h-[70vh]   md:bg-gradient-to-b from-[#000B30] from-1%  via-[#C5D2FF] via-20%
        via-[#DEE6FF] via-30%  via-[#ECF1FF] via-40% via-[#F2F5FF] via-50% to-[#FFF] to-60% w-full">
    </div>
    <div class="custom-container">
        <RechargeMenu />
        <div
            class="hidden lg:flex lg:flex-row gap-4 min-h-[500px] rounded-[4rem] bg-blue-950 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border border-gray-100 p-16  -mt-10">
            <slot name="form" />
            <div class=" bg-white w-6/12 xl:w-7/12  lg:inline-block hidden p-4 rounded-2xl">
                <NuxtImg :src="img? img : '/images/bannerSample.png'" format="webp" class="w-full h-[490px] object-fit rounded-2xl"
                    alt="Banner Image" />
            </div>
        </div>
        <slot name="headering" />
    </div>
</template>
<script setup lang="ts">
    defineProps<{
    img?:String
    }>();
</script>