<template>
<AppMain img="/images/hospital.jpg">
    <template #form>
        <RechargeHospital title="Hospital Bill Payment"/>
    </template>
</AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeHospital title="Hospital Bill Payment" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Hospital Bill Payment ">                
                        <template #default>
                            <p class="mb-5">RechargeZap offers a streamlined and convenient solution for online hospital bill payments. This service allows users to pay their medical bills from various healthcare facilities without the hassle of visiting the hospital. RechargeZap's platform is designed for ease of use, ensuring that you can handle your healthcare payments securely and efficiently.</p>
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
