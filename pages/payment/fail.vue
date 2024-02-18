<template>
    <section class="text-center flex flex-col  gap-y-4 md:gap-y-8  h-full justify-center items-center">
        <h1 class="text-[4rem] md:text-[6rem] text-[#000B30] h-[8rem] md:h-[12rem] ">
            Failed
        </h1>
        <Button class="bg-[#182C64]">
            <NuxtLink to="/">Go Back Home</NuxtLink>
        </Button>
    </section>
</template>

<script setup lang="ts">

const sendFailureAcknowledgement = async () => {
    const router = useRoute().query;

    interface TransactionMetaPayload {
        transactionId: String,
        serviceId: Number
    }
    const transactionMetaPayload = {
        transactionId: router.txnId,
        serviceId: Number(router.serviceId)
    } as TransactionMetaPayload

    try {
        if (transactionMetaPayload.transactionId && transactionMetaPayload.serviceId) {
            await $fetch('http://pulsepe.com/api/prepaid/payment/status', {
                method: "POST",
                body: transactionMetaPayload
            })
        }
    }
    catch (error) {
        console.error("🚀 ~ sendFailureAcknowledgement ~ error:", error)
    }
}
onMounted(() => {
    sendFailureAcknowledgement()
})
</script>