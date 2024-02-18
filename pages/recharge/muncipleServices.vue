<template>
<AppMain img="/images/MunicipalServices.jpg">
    <template #form>
        <RechargeMuncipleService title="Munciple Services"/>
    </template>
</AppMain>
    <div class="lg:hidden min-h-[60dvh] p-2">
        <RechargeMuncipleService title="Munciple Services" />
    </div>
        <div class="custom-container">
            <Card class="my-5 mt-10">
                <template #content>
                    <BaseContent title="Municipal Services">                
                        <template #default>
                            <p class="mb-5"> RechargeZap offers a streamlined and efficient way to manage payments for a variety of municipal services. Our platform simplifies the process of paying dues to various municipal councils and administrations across the country. </p>
                           <p class="mb-5"> With RechargeZap, you can easily make payments for services like trade licenses, property taxes, and other municipal charges without the need to visit municipal offices. Our service is designed to be convenient, secure, and user-friendly.</p>
                        </template>
                    </BaseContent>
                </template>
            </Card>
        </div>
</template>
