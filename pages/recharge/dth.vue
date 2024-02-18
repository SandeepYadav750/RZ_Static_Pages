<template>
    <AppMain img="/images/dth.jpg">
        <template #form>
            <RechargeDTH title="DTH Recharge Online" />
        </template>
    </AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeDTH title="DTH Recharge Online" />
    </div>
    <div class="custom-container">
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="DTH Recharge">                
                    <template #default>
                            <h2 class="font-semibold text-lg">Easy Online DTH Recharge with RechargeZap</h2>
                            RechargeZap brings the convenience of online DTH recharge to your fingertips, supporting major DTH providers like Tata Play. With a variety of channels and services, including HD and SD options and value-added services, RechargeZap ensures a seamless entertainment experience. Our platform also offers the innovative RechargeZap Binge Combos, combining broadcast and OTT services.
                    
                            <h2 class="font-semibold text-lg mt-5">Recharge Your DTH with RechargeZap</h2>
                            RechargeZap simplifies the process of recharging your DTH service. Choose from a range of DTH plans that suit your needs and enjoy uninterrupted services without the hassle of visiting vendors or offline stores. Our online platform saves you time and protects you from late fees.

                        </template>
                </BaseContent>
            </template>
        </Card>
    </div>
</template>
