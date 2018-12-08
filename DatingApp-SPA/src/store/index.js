import Vuex from "vuex";
import Vue from "vue";

import auth from "./modules/auth";
import values from "./modules/values";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    values
  }
});


