<template>
    <AppMain img="/images/metro.jpg">
        <template #form>
            <RechargeMetro title="Metro Card Recharge"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeMetro title="Metro Card Recharge" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Metro Card Recharge">                
                        <template #default>
                            RechargeZap offers a swift and reliable service for metro card recharges across various cities. With this service, users can easily top-up their metro cards for Bengaluru, Chennai, Delhi, Hyderabad, and Mumbai metros. The process is quick, secure, and can be done from anywhere, saving time and enhancing travel convenience.                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>