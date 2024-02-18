<!-- <template>
    <div class="hidden lg:block bg-white rounded-2xl backdrop-filter backdrop-blur-xl  lg:mx-48  my-4  lg:my-0 z-10 relative">
        <ul class=" flex flex-row lg:px-4 lg:py-1 items-center justify-between gap-2 h-full">
            <NuxtLink v-for="item in items" :to="item.path" class="col-span-1 flex ">
                <li class="w-[100px] group flex flex-col items-center gap-x-4 gap-y-2 hover:bg-opacity-80 hover:bg-blue-200 active:bg-opacity-80active:bg-blue-200 p-2 rounded-2xl"
                    :class="{ 'bg-blue-200 text-[#0156F7]': $route.path === item.path, }">
                    <NuxtImg :src="item.img" sizes="28px lg:32px" format="webp" class='w-[25px] h-[2rem]' />
                    <p class=" group-hover:text-[#0156F7] text-xs font-medium"> {{ item.label }}</p>
                </li>
            </NuxtLink>
            <li>
                <Button class="bg-transparent flex flex-col " unstyled>
                    <NuxtImg src="/images/more.webp" sizes="32px" format="webp" />
                    <p class=" group-hover:text-[#0156F7] text-xs font-medium"> More</p>
                </Button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
    {
        label: 'Prepaid',
        img: '/images/prepaid.png',
        path: '/recharge/prepaid'

    },
    {
        label: 'Postpaid',
        img: '/images/postpaid.png',
        path: '/recharge/postpaid'

    },
    {
        label: 'DTH',
        img: '/images/dth.png',
        path: '/recharge/dth'

    },
    { 
        label: "Landline",
        img: '/images/landline.png',
        path: "/recharge/landline",
    },
    {
        label: 'Broadband',
        img: '/images/extra.png',
        path: '/recharge/broadband'
    },
    {
        label: 'FASTag',
        img: '/images/fastag.png',
        path: '/recharge/fastag'
    },
    {
        label: 'Electricity',
        img: '/images/electricity.png',
        path: '/recharge/electricity'
    },
    {
        label: 'Cylinder',
        img: '/images/cylinder.png',
        path: '/recharge/cylinder'
    },
    {
        label: 'Water',
        img: '/images/water.png',
        path: '/recharge/water'
    },
    {
        label: 'Piped Gas',
        img: '/images/pipedgas.png',
        path: '/recharge/pipedgas'
    },
    {
        label: 'Metro',
        img: '/images/metro.png',
        path: '/recharge/metro'
    },
]);
</script>

<style scoped></style> -->


<template>
    <div class="hidden lg:block bg-white rounded-2xl backdrop-filter backdrop-blur-xl lg:mx-36 my-4 lg:my-0 z-10 relative">
      <ul
        ref="navList"
        class="flex flex-row lg:px-4 lg:py-1 items-center justify-between gap-2 h-full"
      >
        <NuxtLink
          v-for="item in visibleItems"
          :key="item.label"
          :to="item.path"
          class="col-span-1 flex"
        >
          <li
            class="w-[100px] group flex flex-col items-center gap-x-4 gap-y-2 hover:bg-opacity-80 hover:bg-blue-200 active:bg-opacity-80 active:bg-blue-200 p-2 rounded-2xl"
            :class="{ 'bg-blue-200 text-[#0156F7]': $route.path === item.path }"
          >
            <NuxtImg
              :src="item.img"
              sizes="28px lg:32px"
              format="webp"
              class="w-[25px] h-[2rem]"
            />
            <p class="group-hover:text-[#0156F7]  text-xs font-medium">
              {{ item.label }}
            </p>
          </li>
        </NuxtLink>
        <li v-if="hiddenItems.length > 0">
          <Button class="bg-transparent flex flex-col" @click="toggleMore">
            <NuxtImg src="/images/more.webp" sizes="32px" format="webp" />
            <p class="group-hover:text-[#0156F7] text-black text-xs font-medium">More</p>
          </Button>
          <div
            v-show="showMore"
            class="absolute bg-white shadow-[2px_6px_12px_rgba(0,0,0,0.3)] mt-7 p-2 rounded-md backdrop-filter backdrop-blur-xl my-4 lg:my-0 z-10 top-full right-1 shadow-md after:content-[''] after:text-red-500 after:absolute after:top-[-16px] after:right-[15%] after:w-0 after:h-0 after:border-b-[#575e73] after:border-0 after:border-solid after:border-[9px] after:border-transparent">
            <ul class="grid grid-cols-3 sm:grid-cols-4 items-center justify-center">
              <NuxtLink
                v-for="item in hiddenItems"
                :key="item.label"
                :to="item.path"
                class="col-span-1"
              >
                <li
                  class="w-[100px] group flex flex-col items-center gap-x-4 gap-y-2 hover:bg-opacity-80 hover:bg-blue-200 active:bg-opacity-80 active:bg-blue-200 p-2 rounded-2xl"
                  :class="{ 'bg-blue-200 text-[#0156F7]': $route.path === item.path }"
                >
                  <NuxtImg
                    :src="item.img"
                    sizes="28px lg:32px"
                    format="webp"
                    class="w-[25px] h-[2rem]"
                  />
                  <p class="group-hover:text-[#0156F7] text-xs font-medium">
                    {{ item.label }}
                  </p>
                </li>
              </NuxtLink>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
 
  const items = ref([
  {
          img: "/images/prepaid.svg",
          label: "Recharges",
          path: "/recharge/prepaid",
        },
        {
            img: '/images/postpaid.svg',
            label: 'Postpaids',
            path: '/recharge/postpaid'
        },
        {
          img: "/images/dth.svg",
          label: "DTH",
          path: "/recharge/dth",
        },
        {
          img: "/images/landline.svg",
          label: "Landline",
          path: "/recharge/landline",
        },
        {
          img: "/images/broadband.svg",
          label: "Broadband",
          path: "/recharge/broadband",
        },
        {
          img: "/images/fastag.svg",
          label: "Fastag",
          path: "/recharge/fastag",
        },
        {
          img: "/images/electricity.svg",
          label: "Electricity",
          path: "/recharge/electricity",
        },
        {
          img: "/images/cylinder.svg",
          label: "Cylinder",
          path: "/recharge/cylinder",
        },
        {
          img: "/images/water.svg",
          label: "Water",
          path: "/recharge/water",
        },
        {
          img: "/images/pipedgas.svg",
          label: "Piped Gas",
          path: "/recharge/pipedgas",
        },
        {
          img: "/images/hospital.svg",
          label: "Hospital",
          path: "/recharge/hospital",
        },
        {
          img: "/images/loan.svg",
          label: "Loan",
          path: "/recharge/loan",
        },
        {
          img: "/images/rental.svg",
          label: "Rental",
          path: "/recharge/rental",
        },
        {
          img: "/images/muncipalServices.svg",
          label: "Muncipal Services",
          path: "/recharge/muncipleServices",
        },
        {
          img: "/images/housing.svg",
          label: "Housing Society",
          path: "/recharge/housingSociety",
        },
        {
          img: "/images/MunicipalTax.svg",
          label: "Municipal Tax",
          path: "/recharge/municipalTaxes",
        },
        {
          img: "/images/metro.svg",
          label: "Metro",
          path: "/recharge/metro",
        },
        {
          img: "/images/tax.svg",
          label: "Tax",
          path: "/recharge/tax",
        },
        {
          img: "/images/cableTV.svg",
          label: "Cable TV",
          path: "/recharge/cableTV",
        },
        {
          img: "/images/Donation.svg",
          label: "Donation",
          path: "/recharge/donation",
        },
        {
          img: "/images/clubsAssociations.svg",
          label: "clubs and Associations",
          path: "/recharge/clubsAssociations",
        },
        {
          img: "/images/creditCard.svg",
          label: "Credit Card",
          path: "/recharge/creditCard",
        },
        {
          img: "/images/education.svg",
          label: "Education",
          path: "/recharge/education",
        },
        {
          img: "/images/insurance.svg",
          label: "Insurance",
          path: "/recharge/insurence",
        },
        {
          img: "/images/recurringDeposit.svg",
          label: "Recurring Deposit",
          path: "/recharge/recurringDeposit",
        },
        {
          img: "/images/subscription.svg",
          label: "Subscription",
          path: "/recharge/subscription",
        },
        {
          img: "/images/challan.svg",
          label: "Challan",
          path: "/recharge/challan",
        },
]);
  
  const navList = ref(null);
  const showMore = ref(false);
  
  const toggleMore = () => {
    showMore.value = !showMore.value;
  };
  
  const updateNavList = () => {
    const navListWidth = navList.value.offsetWidth;
    console.log(`NavList width = ${navListWidth}`)
    const totalItemsWidth = items.value.length * 120; // Adjust based on your item width
    console.log(`TotalItemsWidth width = ${items.value.length}`)
    console.log(`TotalItemsWidth width = ${totalItemsWidth}`)
  
    if (navListWidth < totalItemsWidth) {
      const hiddenCount = Math.ceil((totalItemsWidth - navListWidth) / 120);
      hiddenItems.value = items.value.slice(-hiddenCount);
      visibleItems.value = items.value.slice(0, items.value.length - hiddenCount);
    } else {
      visibleItems.value = items.value;
      hiddenItems.value = [];
      showMore.value = false;
    }
  };
  
  const visibleItems = ref([]);
  const hiddenItems = ref([]);
  
  onMounted(() => {
    updateNavList();
    window.addEventListener('resize', updateNavList);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateNavList);
  });

  </script>
  

  