<template>
    <Card class=" w-full lg:w-6/12 xl:w-5/12" :pt="{
        root: { class: 'rounded-2xl' }
    }">
        <template #header>
            <div class="p-4 flex items-center justify-between ">
                <h1 class="text-xl font-bold text-[#000B30]">{{ title }}</h1>
                <NuxtImg v-if="selectedRechargeType === 'Postpaid'" src="/images/BBPSLogo2.png" sizes="80px" />
            </div>
        </template>
        <template #content>

            <div class="flex gap-x-3 mb-8">
                <div v-for="recharge in rechargeType" :key="recharge.key" class="flex align-items-center">
                    <RadioButton v-model="selectedRechargeType" :inputId="recharge.key" name="dynamic" :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === recharge.name ? 'bg-[#0003B0] border-[#0003B0]' : undefined
                        })
                    }" :value="recharge.name" />
                    <label :for="recharge.key" class="ml-2">{{ recharge.name }}</label>
                </div>
            </div>
            <form class="flex flex-col gap-y-6">
                <span class="p-float-label">
                    <InputText id="mobileNumber" v-model="rechargeStore.formData.mobileNumber" class="w-full" />
                    <label for="mobileNumber">Mobile Number</label>
                </span>
                <span class="p-float-label">
                    <Dropdown id="operator" v-model="rechargeStore.formData.selectedOperator"
                        :options="rechargeStore.formData.operatorsList" optionLabel="name" placeholder="Select an Operator"
                        class="w-full" >
                        <template #option="{ option }">
                            <div :style="{ whiteSpace: 'normal' }">{{ option.name }}</div>
                        </template>
                    </Dropdown>
                    <label for="operator">Select Operator</label>
                </span>
                <span class="p-float-label">
                    <Dropdown id="operator" v-model="rechargeStore.formData.selectedCircleArea"
                        :options="rechargeStore.formData.circleAreaList" optionLabel="name" placeholder="Select a Circle"
                        class="w-full" >
                        <template #option="{ option }">
                            <div :style="{ whiteSpace: 'normal' }">{{ option.name }}</div>
                        </template>
                    </Dropdown>
                    <label for="operator">Select Circle</label>
                </span>
                <div v-if="selectedRechargeType === 'Prepaid'" class="flex flex-row">
                    <span class="p-float-label w-3/5">
                        <InputNumber v-model="rechargeStore.formData.amount" inputId="currency-india" mode="currency"
                            buttonLayout="horizontal" currency="INR" locale="en-IN" class="w-full" disabled />
                        <label for="operator">Amount</label>
                    </span>
                    <Button @click="visible = true" :disabled="disableCheckPlans" label="Check Plans"
                        class="bg-[#000B30] text-white w-2/5" size="small" />
                </div>
                <span v-else class="p-float-label">
                    <InputNumber v-model="rechargeStore.formData.amount" inputId="currency-india" mode="currency"
                        buttonLayout="horizontal" currency="INR" locale="en-IN" class="w-full" />
                    <label for="operator">Amount</label>
                </span>
                <Button :disabled="disableProceedButton" :pt="{
                    root: { class: ' flex justify-center gap-x-2 bg-[#000B30]' }
                }" @click=getRedirectionURL>
                    Proceed
                    <i class="pi pi-arrow-right text-sm"></i>
                </Button>
            </form>
        </template>
    </Card>

    <Dialog v-model:visible="visible" modal class="h-screen lg:hidden bg-white">
        <template #header>
            <div class=" flex flex-col text-lg text-[#000B30] font-bold">
                <h1>Browse Plans</h1>
                <div class="flex flex-row gap-x-2 py-2 flex-nowrap overflow-auto">
                    <Button v-for="category in rechargeStore.formData.categoriesList" :label="category"
                        @click="changeCategory(category)"
                        class="rounded-2xl bg-white text-black text-xs h-4 md:h-8 flex-[0_0_auto] border border-[#000B30] border-2 hover:bg-[#000B30] hover:text-white" />
                </div>
            </div>
        </template>
        <Card v-for="plan in plans[category]" class=" rounded-xl p-4 my-4 border  border-gray-400 ">
            <template #header>
                <div class="flex justify-between items-center">
                    <h2 class="font-black text-md lg:text-xl text-[#000]">₹ {{ plan?.amount }}</h2>
                    <Button label="Select Plan" @click="updateAmount(plan.amount), updatePlanId(plan._id)"
                        class=" hover:bg-[#000B30] hover:text-white font-black text-xs lg:text-md lg:h-8 h-4 flex-[0_0_auto] text-[#000B30] bg-white border-[#000B30] hover:border-2" />
                </div>

            </template>
            <template #content>
                <div class="flex flex-col  gap-x-2  text-md  font-bold text-slate-900 flex-nowrap overflow-auto  ">
                    <ul class="flex flex-col gap-y-2 lg:flex-row lg:gap-x-3 lg:gap-y-0 ">
                        <li> {{ `• ${plan?.validity ?? null}` }}</li>
                        <li> {{ `• ${plan?.data ?? null}` }}</li>
                        <li> {{ `• ${plan?.SMS ?? null}` }}</li>
                        <li>{{ `• ${plan?.talktime ?? null}` }}</li>
                    </ul>
                </div>
            </template>
        </Card>
    </Dialog>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string,
    defaultRechargeType: string
}>()
const visible = ref(false)
const disableCheckPlans = ref(true)
const disableProceedButton = ref(true)
const category = ref('')

const selectedRechargeType = ref(props.defaultRechargeType);
const rechargeType = ref([
    { name: 'Prepaid', key: 'Prepaid' },
    { name: 'Postpaid', key: 'Postpaid' },

]);
const rechargeStore = useRechargeStore()
rechargeStore.getOptionsList;
let plans: any = null
watch(rechargeStore.formData, () => {
    if (rechargeStore?.formData?.mobileNumber?.length === 10) {
        rechargeStore.getOperator
    }
    if (rechargeStore.formData.selectedOperator !== null && rechargeStore.formData.selectedOperator !== null) {
        disableCheckPlans.value = false
        console.log("From else block" + rechargeStore.formData.selectedCircleArea + "and selected " + rechargeStore.formData.selectedOperator);
        rechargeStore.getPlansList;
        if (rechargeStore?.formData?.categoriesList !== null) {
            category.value = rechargeStore?.formData?.categoriesList[0]
            plans = rechargeStore.formData.plans;
        }
        if (rechargeStore.formData.mobileNumber != null && rechargeStore.formData.selectedOperator != null && rechargeStore.formData.selectedCircleArea != null && rechargeStore.formData.amount !== null) {
            disableProceedButton.value = false
        }

    }
})
watch(selectedRechargeType, () => {
    const router = useRouter()
    if (selectedRechargeType.value === "Postpaid") {
        router.push('/recharge/postpaid')
    }
    else {
        router.push('/recharge/prepaid')
    }
})
const changeCategory = (key: string) => {
    category.value = key;
}

const updateAmount = (amount: any) => {
    rechargeStore.formData.amount = amount
    visible.value = false
}
const updatePlanId = (planId: any) => {
    rechargeStore.formData.planId = planId;
}
const getRedirectionURL = async () => {
    if (selectedRechargeType.value === 'Prepaid') {
        try {
            const requestBody = {
                amount: Number(rechargeStore.formData.amount),
                mobileNumber: Number(rechargeStore.formData.mobileNumber),
                planId: Number(rechargeStore.formData.planId),
            };

            const data: any = await $fetch('http://pulsepe.com/api/prepaid/payment', {
                method: 'POST',
                body: requestBody,
            });

            await navigateTo(data.data.paymentLink, { external: true });
        } catch (error) {
            console.error(`Encountered the following Error:: ${error}`);
        }
    }
}
onMounted(() => {
    const rechargeStore = useRechargeStore()

    if (rechargeStore.formData.mobileNumber != null && rechargeStore.formData.selectedOperator != null && rechargeStore.formData.selectedCircleArea != null && rechargeStore.formData.amount !== null) {
        disableProceedButton.value = false
    }
    if (rechargeStore.formData.selectedOperator !== null && rechargeStore.formData.selectedOperator !== null) {
        disableCheckPlans.value = false
        console.log("From else block" + rechargeStore.formData.selectedCircleArea + "and selected " + rechargeStore.formData.selectedOperator);
        rechargeStore.getPlansList;
        if (rechargeStore?.formData?.categoriesList !== null) {
            category.value = rechargeStore?.formData?.categoriesList[0]
            plans = rechargeStore.formData.plans;
        }
    }
})
</script>
