import { defineStore } from "pinia";

export const useRechargeDthStore = defineStore({
  id: "RechargeStoreDTH",
  state: () => {
    return {
      formData: {
        subscriberId: null,
        amount: null,
        operatorsList: null,
        selectedOperator: null,
      } as formSchema,
    };
  },
  getters: {
    async getOptionsLists(state) {
      const { data } = await useFetch("http://pulsepe.com/api/dth/operators");
      const response: any = data.value;
      state.formData.operatorsList = response.data;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRechargeDthStore, import.meta.hot));
}

interface formSchema {
  subscriberId: string | null;
  operatorsList: Array<{ name: string; id: number }> | null;
  selectedOperator: { name: string; id: number } | null;
  amount: number | null;
}
