import { defineStore } from "pinia";

export const useRechargeStore = defineStore({
  id: "RechargeStore",
  state: () => {
    return {
      formData: {
        mobileNumber: null,
        selectedOperator: null,
        selectedCircleArea: null,
        amount: null,
        operatorsList: null,
        circleAreaList: null,
        categoriesList: null,
        plans: null,
        planId: null,
      } as formSchema,
    };
  },
  getters: {
    async getOptionsList(state) {
      try {
        const { data } = await useFetch("http://pulsepe.com/api/prepaid");
        const response: any = data.value;
        state.formData.operatorsList = response.operatorList;
        state.formData.circleAreaList = response.circleAreaList;
      } catch (error) {
        console.error(`Error encountered while fetching OptionsList: ${error}`);
      }
    },
    async getOperator(state) {
      try {
        const { data } = await useFetch("http://pulsepe.com/api/prepaid", {
          query: { tel: state.formData.mobileNumber },
        });
        const response: any = data.value;
        state.formData.selectedCircleArea = response.circle;
        state.formData.selectedOperator = response.operator;
      } catch (error) {
        console.error(`Error while fetching options : ${error}`);
      }
    },
    async getPlansList(state) {
      if (
        state.formData.selectedOperator !== null &&
        state.formData.selectedCircleArea !== null
      ) {
        try {
          const { data } = await useFetch(
            `http://pulsepe.com/api/prepaid/plans`,
            {
              query: {
                operatorId: state.formData.selectedOperator?.id,
                circleId: state.formData.selectedCircleArea?.id,
              },
            }
          );
          const response: any = data.value;
          state.formData.categoriesList = Object.keys(response.data.plans);
          state.formData.plans = response.data.plans;
        } catch (error) {
          console.error(`Error while fetching Plans : ${error}`);
        }
      }
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRechargeStore, import.meta.hot));
}

interface formSchema {
  mobileNumber: string | null;
  selectedOperator: { name: string } | null;
  operatorsList: Array<{ name: string; id: number }> | null;
  selectedCircleArea: { name: string } | null;
  circleAreaList: Array<{ name: string; id: number }> | null;
  amount: number | null;
  plans: object | null;
  categoriesList: string[] | null;
  planId: number | null;
}
