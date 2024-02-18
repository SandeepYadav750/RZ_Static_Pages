<template>
    <AppMain img="/images/cylinder.jpg">
        <template #form>
            <RechargeCylinder title="Cylinder Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeCylinder title="Cylinder Bill" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Online Gas Cylinder Booking">                
                        <template #default>
                            <h2 class="font-semibold text-lg">Hassle-Free Online Gas Cylinder Booking with RechargeZap</h2>
                                With RechargeZap, running out of cooking gas is no longer a concern. Our platform allows you to conveniently book your LPG gas cylinder from the comfort of your home, eliminating the need to step outside. Whether making your favourite soup or planning a family dinner, RechargeZap ensures your kitchen never runs out of gas.
                            
                            <h2 class="font-semibold text-lg mt-5">Supported LPG Cylinder Providers on RechargeZap</h2>
                            RechargeZap supports a range of leading LPG cylinder providers, ensuring you have access to the best in the market. This includes Bharat Gas (BPCL), HP Gas, and Indane Gas (Indian Oil), offering you a choice and convenience.
                        
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
