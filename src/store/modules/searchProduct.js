const state = {
  searchProdList: [],
  searchScaleList: [],
  minMaxPrice: null,
  stockCheckbox: false,
  count: 0,
  sort: {
    name: "",
    ascDescSorting: "",
  },
};

const mutations = {
  changeProdList(state, payload) {
    state.searchProdList = payload;
  },
  changeScaleList(state, payload) {
    state.searchScaleList = payload;
  },
  setMinMaxPrice(state, payload) {
    state.minMaxPrice = payload;
  },
  setStockCheckbox(state, payload) {
    state.stockCheckbox = payload;
  },
  setCount(state, payload) {
    state.count = payload;
  },
  setSort(state, payload) {
    state.sort.name = payload.name;
    payload.ascDescSorting
      ? (state.sort.ascDescSorting = payload.ascDescSorting)
      : (state.sort.ascDescSorting = !state.sort.ascDescSorting);
  },
};

const getters = {
  getSearchProdList: (state) => {
    return state.searchProdList;
  },
  getSearchScaleList: (state) => {
    return state.searchScaleList;
  },
  getMinMaxPrice: (state) => {
    return state.minMaxPrice;
  },
  getStockCheckbox: (state) => {
    return state.stockCheckbox;
  },
  getCount: (state) => {
    return state.count;
  },
  getSort: (state) => {
    return state.sort;
  },
};

export default {
  state,
  mutations,
  getters,
};
