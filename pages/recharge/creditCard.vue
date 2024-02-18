
<template>
    <AppMain img="/images/CreditCard.jpg">
        <template #form>
            <RechargeCreditCard title="Credit Card" />
        </template>
    </AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeCreditCard title="Credit Card" />
    </div>
    <div class="custom-container">
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Credit Card Bill Payment">                
                    <template #default>
                        RechargeZap offers an efficient and secure platform for credit card bill payments. This service is tailored to provide convenience and reliability, allowing users to manage their credit card dues effortlessly. With RechargeZap, ensure timely payments and maintain a healthy credit score. 
                    </template>
                </BaseContent>
            </template>
        </Card>
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Advantages of Using RechargeZap for Credit Card Payments">                
                    <template #default>
                        Enjoy multiple benefits with RechargeZap, including a user-friendly interface, multiple payment options, secure transactions, and instant payment confirmations. Experience hassle-free payments with minimal service charges.
                    </template>
                </BaseContent>
            </template>
        </Card>
    </div>
</template>
