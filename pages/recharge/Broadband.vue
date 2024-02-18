
<template>
    <AppMain img="/images/Broadband.jpg">
        <template #form>
            <RechargeBroadband title="Broadband Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeBroadband title="Broadband Bill" />
        </div>
      <div class="custom-container">
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Broadband Bill Payment Service">                
                    <template #default>
                        RechargeZap offers an efficient and convenient solution for your broadband bill payments. Our platform is designed for those who value time and security, providing a hassle-free way to pay broadband bills from various providers. With just a few clicks and an internet connection, manage your payments from anywhere, anytime.
                    </template>
                </BaseContent>
            </template>
        </Card>
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Additional Information">                
                    <template #default>
                        RechargeZap is committed to delivering a seamless online payment experience. We support a wide range of broadband providers, enabling you to handle all your bill payments effortlessly. Enjoy benefits like attractive cashback offers, secure transactions 24/7, and no additional transaction fees. RechargeZap also offers instant financing options, making your broadband bill payments both convenient and rewarding.
                    </template>
                </BaseContent>
            </template>
        </Card>

    </div>
</template>
