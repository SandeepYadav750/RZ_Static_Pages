<template>
    <AppMain img="/images/landline.jpg">
        <template #form>
            <RechargeLandline title="Landline Bill"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeLandline title="Landline Bill" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Landline Bill Payment ">                
                        <template #default>
                            <p class="mb-5">With RechargeZap, online landline bill payment is a breeze. No more queues or missed deadlines; pay your landline bills swiftly and securely from anywhere, at any time. Our platform caters to a broad range of landline providers, offering a one-stop solution for all your bill payment needs</p>
                            <p>Whether you're at home, work, or on the move, RechargeZap ensures that paying your landline bill is just a matter of a few clicks on your laptop, tablet, or smartphone. Plus, you have the option to save your card and other personal details for faster payments next time. Embrace the convenience and security of RechargeZap for all your landline bill payments.</p>
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
