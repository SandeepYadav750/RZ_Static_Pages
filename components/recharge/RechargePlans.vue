<template>
    <Card class="hidden lg:inline-block  mt-4 lg:w-[55%] rounded-xl h-[57vh] overflow-x-scroll " :pt="{
        content: { class: 'p-0' }
    }">
        <template #header>
            <div class="p-4 h-24 text-xl text-[#000B30] font-bold">
                <h1>{{ title }}</h1>
                <div class="flex flex-row gap-x-2 py-2 flex-nowrap overflow-auto">
                    <Button v-for="item in items" :label="item.name"
                        class="rounded-2xl bg-white text-black text-xs h-4 md:h-8 flex-[0_0_auto] border border-[#000B30] border-2 hover:bg-[#000B30] hover:text-white" />
                </div>
            </div>
        </template>
        <template #content>
            <Card v-for="plan in plans" class=" rounded-xl p-4 my-4 border  border-gray-400 h-[10rem]">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h2 class="font-black text-xl text-[#000]">₹{{ plan?.amount }}</h2>
                        <Button label="Select Plan" @click="updateAmount(plan.amount)"
                            class=" hover:bg-[#000B30] hover:text-white font-black text-xs h-4 md:h-8 flex-[0_0_auto] text-[#000B30] bg-white border-[#000B30] hover:border-2" />
                    </div>

                </template>
                <template #content>
                    <div class="flex flex-row gap-x-2  text-md font-bold text-slate-900 flex-nowrap overflow-auto  ">
                        <ul class="flex flex-row gap-x-6 ">
                            <li>• {{ plan?.validity }}</li>
                            <li>• {{ plan?.data }}</li>
                            <li>• {{ plan?.SMS }}</li>
                            <li>• {{ plan?.talktime }}</li>
                        </ul>
                    </div>
                </template>
            </Card>
        </template>
    </Card>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
const items = [
    { name: 'Recent' },
    { name: 'Data Saver' },
    { name: 'Top-up' },
    { name: 'Roaming' },
    { name: 'International' },
    { name: 'Talktime' },
    { name: 'Talktime' },
    { name: 'Talktime' },
    { name: 'Talktime' },
    { name: 'Talktime' },

]
const { data } = useFetch('http://localhost:8000/prepaid/plans?operatorName=10&circle=6')
const plans = data
const rechargeStore = useRechargeStore()
const updateAmount = (amount: any) => {
    rechargeStore.formData.amount = amount
}
</script>