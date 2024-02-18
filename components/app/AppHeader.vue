<template>
    <header>
        <div class="flex flex-row items-center justify-between bg-[#000B30] flex h-[10vh] lg:px-24 xl:px-32 p-4 ">
            <NuxtLink to="/">
                <NuxtImg src="/images/Logo.png" sizes="64px md:80px" class="m-auto" />
            </NuxtLink>
            <Button
                class="hidden text-white bg-transparent md:inline-block hover:text-transparent hover:bg-gradient-to-r from-red-500 to-blue-300 hover:bg-clip-text"
                size="small" label="Login" icon="pi pi-user" />
            <Button unstyled @click="isMenuVisible = true" class="inline-block md:hidden">
                <i class="text-xl font-black text-white pi pi-bars" />
            </Button>
        </div>
        <Dialog v-model:visible="isMenuVisible" position="left" modal unstyled :draggable="false" :pt="{
            header: { class: 'flex flex-row items-center justify-between' }
        }" class="w-[60vw] h-screen bg-[#000B30] text-white rounded-r-2xl p-4">
            <template #header>
                <NuxtImg src="/images/Logo.png" sizes="64px" />
            </template>
            <Divider class="h-[2px] bg-white my-8" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </Dialog>
    </header>
</template>

<script setup lang="ts">
const isMenuVisible = ref(false)
</script>