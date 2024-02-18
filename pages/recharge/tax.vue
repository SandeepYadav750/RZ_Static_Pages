<template>
<AppMain img="/images/tax.jpg">
    <template #form>
        <RechargeTax title="Tax"/>
    </template>
</AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeTax title="Tax" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Tax Payment Service">                
                        <template #default>
                            RechargeZap introduces a streamlined and secure platform for managing and paying your taxes online. With our service, you can effortlessly handle a variety of tax payments, including income tax, property tax, and more. RechargeZap simplifies the tax payment process, saving you time and ensuring accuracy in compliance with tax regulations.
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
