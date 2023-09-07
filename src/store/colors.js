import { defineStore } from 'pinia';

// the bg colors are randomly generated

export const useColorsStore = defineStore({
  state: () => ({ skewBgColor: '#000000' }),
  getters: {
    getSkewBgColor: state => state.skewBgColor,
  },
  actions: {
    setSkewBgColor(color) {
      this.skewBgColor = color;
    },
  },
});
