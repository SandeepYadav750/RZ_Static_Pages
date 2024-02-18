<template>
<AppMain img="/images/donation.jpg">
    <template #form>
        <RechargeDonation title="Donation"/>
    </template>
</AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeDonation title="Donation" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Donation ">                
                        <template #default>
                            <p class="mb-5">RechargeZap provides a convenient and secure way to make donations online. Our platform supports a wide range of charitable trusts, foundations, and relief funds, enabling you to contribute to causes you care about. From supporting healthcare and education to aiding in disaster relief, RechargeZap makes it easy to give back to the community.</p>
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
