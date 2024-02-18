<template>
    <Card class=" w-full lg:w-6/12 xl:w-5/12" :pt="{
        root: { class: 'rounded-2xl' }
    }">
        <template #header>
            <div class="p-4 flex items-center justify-between ">
                <h1 class="text-xl font-bold text-[#000B30]">{{ title }}</h1>
                <NuxtImg src="/images/BBPSLogo2.png" sizes="80px" />
            </div>
        </template>
        <template #content>
            <form class="flex flex-col gap-y-6">
                <div class="p-float-label">
                    <Dropdown v-model="selectedStates" inputId="states" :options="states" optionLabel="name" placeholder="Select a States" class="w-full" >
                        <template #option="{ option }">
                            <div :style="{ whiteSpace: 'normal' }">{{ option.name }}</div>
                        </template>
                    </Dropdown>
                    <label for="states">Select States</label>
                </div>
                <div class="p-float-label">
                    <Dropdown v-model="selectedOperators" inputId="operator" :options="operators" optionLabel="name" placeholder="Select an Operator" class="w-full" >
                        <template #option="{ option }">
                            <div :style="{ whiteSpace: 'normal' }">{{ option.name }}</div>
                        </template>
                    </Dropdown>
                    <label for="operator">Select Operator</label>
                </div>
                <div>
                    <span class="p-float-label">
                        <InputText id="consumerNumber" v-model="value" class="w-full" />
                        <label for="consumerNumber">Consumer Number</label>
                    </span>
                    <span class="text-xs font-semibold text-[#086b3b]">Please enter a valid Consumer number with a maximum of 10 digits (eg. 2447931692)</span>
                </div>
                <Button :pt="{
                    root: { class:'flex justify-center gap-x-2 bg-[#000B30]' }
                }">
                    Proceed
                    <i class="pi pi-arrow-right text-sm"></i>
                </Button>
            </form>
        </template>
    </Card>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()

const value = ref(null);

const selectedStates = ref();
const states = ref([
    { name: 'Delhi' },
    { name: 'Kolkata' },
    { name: 'Punjab' },
    { name: 'Haryana' },
    { name: 'Uttar Pradesh' },
    { name: 'Kerala' }
]);

const selectedOperators = ref();
const operators = ref([
    { name: 'Airtel Landline' },
    { name: 'BSNL Landline - Corporate' },
    { name: 'BSNL Landline- Individual' },
    { name: 'MTNL Delhi' },
    { name: 'MTNL Mumbai' },
    { name: 'Tata Landline' }
]);
</script>