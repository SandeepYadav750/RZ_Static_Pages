<template>
    <AppMain img="/images/electricity.jpg">
        <template #form>
            <RechargeElectricity title="Electricity Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeElectricity title="Electricity Bill" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Effortless Online Electricity Bill Payments">                
                        <template #default>
                            Gone are the days of waiting in line to pay electricity bills. RechargeZap has revolutionized bill payments, making it swift and effortless. Now, pay your electricity bills online in just a few clicks using your smartphone, laptop, or any internet-enabled device. Avoid the hassle of traditional bill payment methods and save precious time with RechargeZap.
                        </template>
                    </BaseContent>
                </template>
            </Card>
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="How to Pay Your Electricity Bill on RechargeZap?">                
                        <template #default>
                            Paying your electricity bill is simple and convenient with RechargeZap. Just visit our website, go to the electricity bill payment section, select your service provider, enter your CA number, and proceed with the payment. It's fast, secure, and can be done anywhere at any time.
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>