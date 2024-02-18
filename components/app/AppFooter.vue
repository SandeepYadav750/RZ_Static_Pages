<template>
    <footer class=" bg-[#000B30] lg:px-24 xl:px-32 py-8 p-4 ">
        <div class=" md:flex  md:flex-row justify-between items-center">
            <NuxtImg src="/images/Logo.png" sizes="80px md:96px" class="m-auto md:m-0" />
            <nav>
                <ul class="text-white flex gap-x-8 gap-y-4 flex-wrap text-xs  sm:text-sm mt-8 justify-center">
                    <NuxtLink v-for="item in  navItems" :to="item.path">
                        <li class="hover:text-indigo-400">{{ item.title }}</li>
                    </NuxtLink>

                </ul>
            </nav>
        </div>
        <Divider type="solid" :pt="{
            root: { class: ' bg-white h-[1px]' }
        }" />

        <p class="text-center text-gray-400 text-xs sm:text-xs mt-6 md:mt-0">© 2023 RechargeZap. All Rights Reserved</p>
    </footer>
</template>

<script setup>
const navItems = [{
    title: "About Us",
    path: "/content/about"
},
{
    title: "FAQs",
    path: "/content/faqs"
},
{
    title: "Privacy Policy",
    path: "/content/privacy"
},
{
    title: "Contact Us",
    path: "/contact"
},
{
    title: "Terms & Conditions",
    path: "/content/terms-conditions"
},
{
    title: "Refund Policy",
    path: "/content/refund"
}
]

</script>