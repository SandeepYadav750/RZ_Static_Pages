<template>
    <AppMain img="/images/prepaid.jpg">
        <template #form>
            <RechargeMobile title="Mobile Recharge" defaultRechargeType="Prepaid" />
        </template>
    </AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeMobile title="Mobile Recharge" defaultRechargeType="Prepaid" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Mobile Prepaid Recharge">                
                        <template #default>
                            <h2 class="font-semibold text-lg">Effortless Prepaid Mobile Recharging</h2>
                            RechargeZap simplifies your mobile recharge experience. Our platform is designed to efficiently handle recharges for all top Indian operators. With just a few taps, choose from an extensive range of plans, including top-ups, validity extensions, comprehensive combo packages, exclusive special tariffs, and even international roaming options.

                            <h2 class="font-semibold text-lg mt-5">Exclusive Value-Added Offerings</h2>
                            Beyond mere recharges, RechargeZap enhances your mobile usage with a variety of additional services, such as personalized caller tunes and comprehensive SMS packs, catering to the unique preferences of our users.

                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
