<template>
    <div class="bg-[#f2f2f2]">
        <div class="mx-auto px-2.5 md:w-9/12 py-14">
            <main>
                <ContentDoc :path="slug" v-slot="{ doc }">
                    <h1 class="font-semibold mb-5 text-3xl md:text-4xl lg:text-6xl drop-shadow-2xl inline-block">{{ doc.title }}
                        <Divider type="dotted" class=" h-1 bg-[#192e6a]" />
                    </h1>
                    <h3 class="text-[gray] mb-[30px]">{{ doc.subtitle }}</h3>
                    <ContentRenderer :value="doc" />
                </ContentDoc>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug.toString()
</script>
