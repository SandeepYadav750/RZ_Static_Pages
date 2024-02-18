<template>
    <AppMain img="/images/Challan.png">
        <template #form>
            <RechargeChallan title="Pay Traffic Challan"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeChallan title="Pay Traffic Challan" />
        </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Challan Payment Service">                
                        <template #default>
                            RechargeZap offers an efficient service for paying challans online. This service is available for multiple regions including Andhra Pradesh, Chennai, Tambaram, Telangana, Delhi, UP and more states. It simplifies the process of clearing traffic fines, ensuring legal compliance and convenience.
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>