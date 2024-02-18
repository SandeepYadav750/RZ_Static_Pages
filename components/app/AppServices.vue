<template>
    <div class="py-8 bg-gray-100">
        <Card class=" mx-4 lg:mx-16 xl:mx-24  rounded-2xl">
            <template #header>
                <h1 class="text-2xl font-black md:text-3xl text-blue-900 p-4">Our Top Services</h1>
                <Divider class="h-[1px] bg-black" />
            </template>
            <template #content>
                <div class="flex flex-col justify-center gap-y-4 ">
                    <ul class=" grid grid-cols-3 lg:grid-cols-6 lg:px-12 items-center justify-between gap-3">
                        <NuxtLink v-for="service in servicesStore.topServices" :to="service.path" class="col-span-1 ">
                            <li
                                class="group flex flex-col items-center gap-x-4 gap-y-2 hover:bg-opacity-80 hover:bg-blue-200 active:bg-opacity-80active:bg-blue-200 py-2 px-4 rounded-2xl">
                                <NuxtImg :src="service.image" :alt="service.label + ' icon'" class="h-12 aspect-auto" />
                                <p class="group-hover:text-[#0156F7] font-medium"> {{ service.label }}</p>
                            </li>
                        </NuxtLink>
                        <NuxtLink v-if="isVisible" v-for="service in servicesStore.topServices" :to="service.path"
                            class="col-span-1 ">
                            <li
                                class="group flex flex-col items-center gap-x-4 gap-y-2 hover:bg-opacity-80 hover:bg-blue-200 active:bg-opacity-80active:bg-blue-200 py-2 px-4 rounded-2xl">
                                <NuxtImg :src="service.image" :alt="service.label + ' icon'" class="h-12 aspect-auto" />
                                <p class="group-hover:text-[#0156F7] font-medium"> {{ service.label }}</p>
                            </li>
                        </NuxtLink>
                        <Button :label="isVisible == false ? 'Show More' : 'Show Less'" sizes="small md:medium"
                            @click="isVisible = !isVisible" class="block lg:hidden bg-[#000B30]"
                            :icon="isVisible == false ? 'pi pi-caret-down' : 'pi pi-caret-up'" />
                    </ul>
                    <Button :label="isVisible == false ? 'Show More' : 'Show Less'" sizes="small md:medium"
                        @click="isVisible = !isVisible" class="hidden lg:inline-block mx-auto max-w-[12rem] bg-[#000B30]"
                        :icon="isVisible == false ? 'pi pi-caret-down' : 'pi pi-caret-up'" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
const servicesStore = useServicesStore()
const isVisible = ref(false);
</script>