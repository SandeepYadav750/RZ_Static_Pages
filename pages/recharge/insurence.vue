
<template>
    <AppMain img="/images/Insurance.jpg">
        <template #form>
            <RechargeInsurence title="Insurence Payment"/>
        </template>
    </AppMain>
        <div class="lg:hidden min-h-[60dvh] p-2">
            <RechargeInsurence title="Insurence Payment" />
        </div>
      <div class="custom-container">
        <Card class="my-5 mt-10">
            <template #content>
                <BaseContent title="Insurance Premium Payment Service">                
                    <template #default>
                        RechargeZap offers a streamlined online platform for insurance premium payments. Catering to various insurance types including life, health, and home loan insurance, RechargeZap partners with leading insurance providers to ensure a smooth transaction experience. Make your insurance payments effortlessly and securely with just a few clicks.
                    </template>
                </BaseContent>
            </template>
        </Card>
    </div>
</template>
