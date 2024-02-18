<template>
    <div id="invoice">
    <div class="card m-auto p-5 bg-white shadow-lg border border-slate-500 rounded-lg mt-5 relative">
        <DataTable value="p" :pt="{ root:{class:'text-sm mb-6 absolute top-[28%] left-[36%] z-10'}}" >
            <Column :pt="{headercell:{class:'hidden'}, bodycell:{class:'border-0'}}">
                <template #body>
                    <img src="https://cdn-media-ie.pearltrees.com/2e/cc/56/2ecc56b35918637b7e34843a45c8f978-xl.jpg" alt="Logo" class="w-[100px]" />
                </template>
            </Column>           
        </DataTable>
        <DataTable :value="logoheading" :pt="{ root:{class:'text-sm mb-6'}}" >
            <Column :pt="{headercell:{class:'hidden'}, bodycell:{class:'border-0'}}" field="images">
                <template #body>
                    <img src="https://staging.rechargezap.in/ui-dev/img/logo_clr.png" alt="Logo" class="w-[100px]" />
                </template>
            </Column>
            <Column :pt="{headercell:{class:'hidden'}, bodycell:{class:'font-bold text-right text-4xl underline border-0'}}" field="heading" ></Column>            
        </DataTable>
        <DataTable :value="parameters" showGridlines :pt="{ root:{class:'text-sm'}}">
            <Column :pt="{headercell:{class:'py-2.5'}, bodycell:{class:'py-2.5'}}" field="code" header="Particulars"></Column>
            <Column :pt="{headercell:{class:'py-2.5'}, bodycell:{class:'py-2.5 font-medium text-right'}}" header="Value">
                <template #body="slotProps">
                    <div v-if="Array.isArray(slotProps.data.name)">
                        <DataTable :value="slotProps.data.name" :pt="{ root:{class:'text-sm'}}" >
                            <Column :pt="{headercell:{class:'py-2.5'}, bodycell:{class:'py-2.5'}}" field="infohead" header="Info"></Column>
                            <Column :pt="{headercell:{class:'py-2.5'}, bodycell:{class:'py-2.5 font-medium text-right'}}" field="infodetail" header="Detail"></Column>
                        </DataTable>
                    </div>
                    <div v-else>
                        {{ slotProps.data.name }}
                    </div>
                </template>
            </Column>
        </DataTable>
        <DataTable value="b" :pt="{ root:{class:'mt-2'}}" >
            <Column :pt="{headercell:{class:'hidden'}, bodycell:{class:'border-0'}}">
                <template #body>
                    <h3 class="font-bold font-lg text-black">Note:-</h3>
                    <p class="font-base text-gray-600">This is computer generated receipt and does not require physical signature.</p>
                </template>
            </Column>           
        </DataTable>
    </div>
</div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const logoheading = ref([
{
    images: "images/logo_clr.png",
    heading: "Bill Payment Invoice"
},
]);

const parameters = ref([
{
    code: "Approval Ref No.",
    name: "JAAR5GVVG8BFFF"
},
{
    code: "Transaction ID",
    name: "QUF5GVVGJALLFF"
},
{
    code: "Transaction Status",
    name: "SUCCESS"
},
{
    code: "Transaction Date and Time",
    name: "15/02/2024 15:44:02"
},
{
    code: "Payment Channel",
    name: "INTERNET BANKING"
},
{
    code: "Payment Method",
    name: "BANKACCOUNT-78670000654328"
},
{
    code: "Biller Info",
    name: [{
        infohead: 'Biller Name:',
        infodetail: 'JIO'
    },
    {
        infohead: 'Bill ID:',
        infodetail: 'JIO00000WAJ764'
    }],
},
{
    code: "Consumer Info",
    name:  [{
        infohead: 'Consumer Name:',
        infodetail: 'Sandeep Yadav'
    },
    {
        infohead: 'Consumer ID:',
        infodetail: '7689443'
    },
    {
        infohead: 'Mobile Number:',
        infodetail: '7503667612'
    }]
},
{
    code: "Biller Date",
    name: "31/01/2024"
},
{
    code: "Biller Amount",
    name: "₹ 500.00"
},
]);
</script>


