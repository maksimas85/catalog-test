const state = {
  isLargeGridMode: true,
};

const mutations = {
  changeLargeGridMode(state) {
    state.isLargeGridMode = !state.isLargeGridMode;
  },
};

const getters = {
  isShowLargeGridMode: (state) => {
    return state.isLargeGridMode;
  },
};

export default {
  state,
  mutations,
  getters,
};
