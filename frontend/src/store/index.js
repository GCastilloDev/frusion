import Vue from 'vue'
import Vuex from 'vuex'
// Tiendas (módulos)
import user from './user'
import app from './app'
import shoppingCart from './shoppingCart'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  getters: {
    
  },
  modules: {
    user,
    app,
    shoppingCart
  },
});
