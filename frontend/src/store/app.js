/**
 * Store de la aplicación
 */
export default {
  namespaced: true,
  state: {
    city: null,
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    }
  },
  actions: {
    selectedCity({ commit }, payload) {
      commit('setCity', payload);
    }
  },
};
