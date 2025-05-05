import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    squareRoot: (state) => Math.sqrt(state.counter),
  },

  actions: {
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
      console.log(this.counter)
    },
  },
});
