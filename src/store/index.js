import Vue from "vue";
import Vuex from "vuex";
import gridMode from "@/store/modules/gridMode";
import searchProduct from "@/store/modules/searchProduct";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gridMode,
    searchProduct,
  },
});
