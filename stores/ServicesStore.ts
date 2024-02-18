import { defineStore } from "pinia";

export const useServicesStore = defineStore({
  id: "ServicesStore",
  state: () => {
    return {
      topServices: [
        {
          image: "/images/prepaid.svg",
          label: "Recharges",
          path: "/recharge/prepaid",
        },
        {
            image: '/images/postpaid.svg',
            label: 'Postpaids',
            path: '/recharge/postpaid'
        },
        {
          image: "/images/dth.svg",
          label: "DTH",
          path: "/recharge/dth",
        },
        {
          image: "/images/landline.svg",
          label: "Landline",
          path: "/recharge/landline",
        },
        {
          image: "/images/broadband.svg",
          label: "Broadband",
          path: "/recharge/broadband",
        },
        {
          image: "/images/fastag.svg",
          label: "Fastag",
          path: "/recharge/fastag",
        },
        {
          image: "/images/electricity.svg",
          label: "Electricity",
          path: "/recharge/electricity",
        },
        {
          image: "/images/cylinder.svg",
          label: "Cylinder",
          path: "/recharge/cylinder",
        },
        {
          image: "/images/water.svg",
          label: "Water",
          path: "/recharge/water",
        },
        {
          image: "/images/pipedgas.svg",
          label: "Piped Gas",
          path: "/recharge/pipedgas",
        },
        {
          image: "/images/hospital.svg",
          label: "Hospital",
          path: "/recharge/hospital",
        },
        {
          image: "/images/loan.svg",
          label: "Loan",
          path: "/recharge/loan",
        },
        {
          image: "/images/rental.svg",
          label: "Rental",
          path: "/recharge/rental",
        },
        {
          image: "/images/muncipalServices.svg",
          label: "Muncipal Services",
          path: "/recharge/muncipleServices",
        },
        {
          image: "/images/housing.svg",
          label: "Housing Society",
          path: "/recharge/housingSociety",
        },
        {
          image: "/images/MunicipalTax.svg",
          label: "Municipal Tax",
          path: "/recharge/municipalTaxes",
        },
        {
          image: "/images/metro.svg",
          label: "Metro",
          path: "/recharge/metro",
        },
        {
          image: "/images/tax.svg",
          label: "Tax",
          path: "/recharge/tax",
        },
        {
          image: "/images/cableTV.svg",
          label: "Cable TV",
          path: "/recharge/cableTV",
        },
        {
          image: "/images/Donation.svg",
          label: "Donation",
          path: "/recharge/donation",
        },
        {
          image: "/images/clubsAssociations.svg",
          label: "clubs and Associations",
          path: "/recharge/clubsAssociations",
        },
        {
          image: "/images/creditCard.svg",
          label: "Credit Card",
          path: "/recharge/creditCard",
        },
        {
          image: "/images/education.svg",
          label: "Education",
          path: "/recharge/education",
        },
        {
          image: "/images/insurance.svg",
          label: "Insurance",
          path: "/recharge/insurence",
        },
        {
          image: "/images/recurringDeposit.svg",
          label: "Recurring Deposit",
          path: "/recharge/recurringDeposit",
        },
        {
          image: "/images/subscription.svg",
          label: "Subscription",
          path: "/recharge/subscription",
        },
        {
          image: "/images/challan.svg",
          label: "Challan",
          path: "/recharge/challan",
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useServicesStore, import.meta.hot));
}
