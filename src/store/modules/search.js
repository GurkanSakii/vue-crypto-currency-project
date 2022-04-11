/*eslint-disable*/
const state = {
  searchTerm: "",
  searchResult: []
};

const getters = {
  searchTerm: (state) => state.searchTerm,
  searchResult: (state) => state.searchResult,
};

const actions = {
  setSearchTerm: async ({ dispatch, commit, getters, rootGetters }, value) => {
    commit("updateSearchTerm", value);
    dispatch("app/redirectToPath", "/searchresult", {
        root: true
    });
    await dispatch("crypto/fetchCryptoCurrencies", null, { root: true });
    dispatch("crypto/setShowLoad", true, { root: true });
    const cryptoData = rootGetters["crypto/cryptoValues"];
    const searchResult = cryptoData.filter((crypto) => {
      return crypto.name.toLowerCase().trim().includes(value.toLowerCase());
    });
    commit("updateSearchResult", searchResult);
    dispatch("crypto/setShowLoad", false, { root: true });
  },
  clearSearchTerm: ({ commit }) => {
    commit("updateSearchTerm", "");
    commit("updateSearchResult", []);
  },
};

const mutations = {
  updateSearchTerm: (state, value) => {
    state.searchTerm = value;
  },
  updateSearchResult: (state, value) => {
    state.searchResult = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
