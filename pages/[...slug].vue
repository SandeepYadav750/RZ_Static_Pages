<template>
    <main class="h-full">
        <ContentDoc :path="slug">
            <template #not-found>
                <section class="text-center flex flex-col  gap-y-4 md:gap-y-8  h-full justify-center items-center">
                    <h1
                        class="text-[6rem] md:text-[10rem] bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent h-[8rem] md:h-[12rem] ">
                        404
                    </h1>
                    <h2 class="text-2xl mdtext-4xl bg-gradient-to-r from-red-900 to-blue-900 bg-clip-text text-transparent">Page not found</h2>
                    <Button class="bg-[#182C64]">
                        <NuxtLink to="/">Go Back Home</NuxtLink>
                    </Button>
                </section>
            </template>
        </ContentDoc>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug.toString()
</script>
