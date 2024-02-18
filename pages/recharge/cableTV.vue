
<template>
    <AppMain img="/images/cableTV.jpg">
        <template #form>
            <RechargeCableTV title="Cable TV Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeCableTV title="Cable TV Bill" />
        </div>
      <div class="custom-container">
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Cable TV Bill Payment Service">                
                    <template #default>
                        RechargeZap offers a streamlined and secure way to pay your Cable TV bills online. With our service, paying your cable bills is not just simple, but also hassle-free and safe. We support all the leading cable TV providers, allowing you to pay your bill online at no extra cost. Our platform is equipped with multiple recharge options to enhance your payment experience, providing offers and rewards for paying your cable TV bills.
                    </template>
                </BaseContent>
            </template>
        </Card>
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Understanding New Cable TV Recharge Rules By TRAI">                
                    <template #default>
                        As per the regulations by the Telecom Regulatory Authority of India (TRAI), RechargeZap adapts to the new tariff system for cable and DTH companies. This system includes a monthly Network Capacity Fee (NCF) and charges for additional channels, ensuring transparency and customer choice in selecting channels and packages.
                    </template>
                </BaseContent>
            </template>
        </Card>

    </div>
</template>
