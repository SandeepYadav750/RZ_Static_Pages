<template>
    <AppMain img="/images/PipedGas.jpg">
        <template #form>
            <RechargePipedGas title="Piped Gas Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargePipedGas title="Piped Gas Bill" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Online Piped Gas Bill Payment">                
                        <template #default>
                            <p class="mb-5">RechargeZap offers a convenient and secure solution for online piped gas bill payments. No longer do you need to stand in long queues or worry about missing due dates. With RechargeZap, make your gas bill payments effortlessly from the comfort of your home or office.</p>
                            <p class="mb-5">Our platform supports various gas service providers, allowing you to choose and pay with ease. Using RechargeZap, you can complete your gas bill payments in just a few clicks, thanks to our user-friendly interface and one-click payment option. The process is fast, secure, and saves you from any potential late penalty charges. Plus, enjoy the added benefits of exciting rewards and cashback on each payment you make with RechargeZap.</p>
                            <p class="mb-5">To make your gas bill payment: simply open the RechargeZap website, navigate to the ‘Piped Gas’ section, select your gas provider, enter your customer ID, and proceed with the payment. We offer various payment methods, including debit card, credit card, UPI, and e-wallets, ensuring a smooth transaction process. With RechargeZap, your data and transactions are protected with advanced encryption, providing a secure and reliable payment experience.</p>
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>