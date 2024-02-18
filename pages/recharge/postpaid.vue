<template>
    <AppMain img="/images/postpaid.jpg">
        <template #form>
            <RechargeMobile title="Mobile Recharge" defaultRechargeType="Postpaid" />
        </template>
    </AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeMobile title="Mobile Recharge" defaultRechargeType="Postpaid" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Mobile Postpaid Recharge">                
                        <template #default>
                            <h2 class="font-semibold text-lg">Seamless Postpaid Bill Payments Online with RechargeZap</h2>
                            RechargeZap revolutionizes the way you handle your postpaid bill payments. In a world where a speedy internet connection is a necessity, RechargeZap offers a stress-free solution to managing your bills. Our service is akin to a credit card system – use now, pay later. Whether it's mobile, DTH, gas, or electricity bills, RechargeZap has got you covered. With postpaid plans frequently outdoing prepaid ones in terms of offers, enjoy unlimited internet without the need to recharge multiple times.

                            <h2 class="font-semibold text-lg mt-5">How to Pay Your Postpaid Bills with RechargeZap?</h2>
                            Paying your postpaid bills with RechargeZap is a breeze. Whether online or offline, we recommend the online route for its time and cost efficiency. Simply link your bank account to our payment interface, enter your bill details, and choose your preferred payment method – be it debit/credit card, UPI, internet banking, or wallet. It's straightforward and quick!
                                                    
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
