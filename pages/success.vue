<template>
    <div class="absolute -z-10 h-[70vh]   md:bg-gradient-to-b from-[#000B30] from-1%  via-[#C5D2FF] via-20%
        via-[#DEE6FF] via-30%  via-[#ECF1FF] via-40% via-[#F2F5FF] via-50% to-[#FFF] to-60% w-full">
    </div>
    <div class="custom-container pt-4">
        <div class="bg-white border border-gray-500 rounded-lg w-full mx-auto p-4 sm:w-10/12 xl:w-8/12 shadow-lg">
            <div class="success_details">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center justify-between gap-4">
                       <span><NuxtImg src="/images/jio_logo.png" sizes="" /></span>
                        <h1 class="font-semibold text-lg">Jio Postpaid</h1>
                    </div>
                    <div class="bbps_logo">
                        <NuxtImg src="/images/BBPS_Logo.png" sizes="64px md:100px" />
                    </div>
                </div>
                <div class=" grid grid-cols-1 px-0 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  sm:gap-y-8 sm:px-10">
                    <div v-for="(parameter, index) in parameters" :key="index" class="sm:border-dotted sm:border-b sm:border-slate-500 pb-4">
                        <div class="sm:w-10/12">
                            <p class="text-xs text-[#afb1b2] font-medium">{{parameter.item}}</p>
                            <h1 :class="{ 'font-semibold': index === 2, 'text-green-500 font-semibold': index === 7 || index === 10 }" class="font-medium text-base">{{ parameter.detail }}</h1>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between sm:justify-evenly my-10">
                  <Button @click="downloadPdf"  :pt="{ root: { class: 'sm:px-10 flex justify-center gap-x-2 bg-[#000B30] hover:opacity-75 hover:shadow-lg' } }" > Dowloand <i class="pi pi-download "></i> </Button>
                    <Button :pt="{ root: { class: 'sm:px-10 flex justify-center gap-x-2 bg-[#000B30] hover:opacity-75 hover:shadow-lg' } }" > Share <i class="pi pi-share-alt "></i> </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const downloadPdf = async () => {
const element = document.getElementById('invoice'); // Replace with your element's ID
const canvas = await html2canvas(element);
const data = canvas.toDataURL('image/png');

 const pdf = new jsPDF({
     orientation: "portrait",
     unit: "px",
     format: [canvas.width, canvas.height]
 });

 pdf.addImage(data, 'PNG', 0, 0, canvas.width, canvas.height);
 pdf.save('invoice.pdf');
};;

const parameters = [{
    item: "Payment Amount",
    detail: "₹ 500.00"
},
{
    item: "Convenience Fees",
    detail: "₹ 00.00"
},
{
    item: "Total Amount",
    detail: "₹ 500.00"
},
{
    item: "Source Ref No.",
    detail: "09865781538267"
},
{
    item: "BBPS Transaction Ref No.",
    detail: "BBTSAAAWQ"
},
{
    item: "Payee Mobile Number",
    detail: "9876789098"
},
{
    item: "Transaction Date and Time",
    detail: "15/02/2024 15:44:02"
},
{
    item: "Payment Status",
    detail: "PAID"
},
{
    item: "Payment Channel",
    detail: "INTERNET BANKING"
},
{
    item: "Payment Method",
    detail: "BANKACCOUNT-78670000654328"
},
{
    item: "Biller Status",
    detail: "PENDING"
},
{
    item: "BillerID",
    detail: "JIO00000WAJ764"
},
{
    item: "Approval Ref No.",
    detail: "JAAR5GVVG8BFFF"
},
{
    item: "Bill Date",
    detail: "31/01/2024"
},
{
    item: "Bill Due Date",
    detail: "10/02/2024"
},
{
    item: "Bill Period",
    detail: "JAN-2024"
},
{
    item: "Mobile No.",
    detail: "9876566787"
},
{
    item: "Customer Name",
    detail: "Sandeep Yadav"
}
]

</script>