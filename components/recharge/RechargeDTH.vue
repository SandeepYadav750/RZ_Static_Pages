<template>
    <Card class=" w-full lg:w-6/12 xl:w-5/12" :pt="{
        root: { class: 'rounded-2xl' }
    }">
        <template #header>
            <div class="p-4 flex items-center justify-between ">
                <h1 class="text-xl font-bold text-[#000B30]">{{ title }}</h1>
            </div>
        </template>
        <template #content>
            <form class="flex flex-col gap-y-6">
                <span class="p-float-label">
                    <Dropdown id="operator" v-model="rechargeDthStore.formData.selectedOperator"
                        :options="rechargeDthStore.formData.operatorsList" optionLabel="name"
                        placeholder="Select an Operator" class="w-full" >
                        <template #option="{ option }">
                            <div :style="{ whiteSpace: 'normal' }">{{ option.name }}</div>
                        </template>
                    </Dropdown>
                    <label for="operator">Select Operator</label>
                </span>
                <span class="p-float-label">
                    <InputText id="mobileNumber" v-model="rechargeDthStore.formData.subscriberId" class="w-full" />
                    <label for="mobileNumber">{{ rechargeDthStore.formData.selectedOperator != null ?
                        rechargeDthStore.formData.selectedOperator.placeholder : 'Enter VC Number' }}</label>
                </span>
                <span class="p-float-label">
                    <InputNumber v-model="rechargeDthStore.formData.amount" inputId="currency-india" mode="currency"
                        buttonLayout="horizontal" currency="INR" locale="en-IN" class="w-full" />
                    <label for="operator">Amount</label>
                </span>
                <Button :pt="{
                    root: { class: 'flex justify-center gap-x-2 bg-[#000B30]' }
                }" @click="getRedirectionURL">
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
const rechargeDthStore = useRechargeDthStore()
rechargeDthStore.getOptionsLists;

const getRedirectionURL = async () => {
    const data: any = await $fetch('http://pulsepe.com/api/dth/payment', {
        method: 'POST',
        body: {
            amount: Number(rechargeDthStore.formData.amount),
            vcNumber: Number(rechargeDthStore.formData.subscriberId),
        }
    })
    await navigateTo(data.data.paymentLink, {
        external: true
    })
}
</script>