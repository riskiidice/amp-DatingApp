import api from "../../api/auth";
import router from "../../router/index"

const state = {
  token: window.localStorage.getItem('token'),
  errors: ""
};

const getters = {
  isLoggedIn: state => !!state.token,
  isErrors: state => state.errors
};

const actions = {
  async register({commit},userForm){
      try {
        const status = await api.register(userForm).then(res => res.status);
        if(status === 201){
          router.push("/login");
        }
      } catch (error) {
        console.log(error)
        commit("setError", error);
      }
  },
  async login({ rootState,commit }, userForm){
      try {
        const user = await api.login(userForm).then(res => res.data);
        window.localStorage.setItem('token', user.token);
        commit("setToken", user.token);
        commit("setError", null);
        router.push("/");
      } catch (error) {
        commit("setError", error);
      }  
  },
  logout: ({ commit }) => {
    window.localStorage.removeItem('token');
    commit("setToken", null);
    router.push("/login")
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
  setError: (state, error) => {
    state.errors = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
