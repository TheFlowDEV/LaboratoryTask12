import { defineStore } from "pinia";
import axios from "axios"
export const useApiStore = defineStore("api", {
  state: () => ({
    data: {},
  }),
  actions: {
    async makeQuery(){
      const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      this.data=resp.data;
    },
    async makeQueryPost(object){
      const resp = await axios.post("https://jsonplaceholder.typicode.com/posts",object)
      this.data=resp.data
    }
  },
});
