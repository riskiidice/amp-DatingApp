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
        const response = await api.register(userForm)
          .then(res => { 
             if(res.data)
                commit("setError", null);
                router.push("/");
          })
          .catch(err => { 
              commit("setError", err.response.data);
          });
  },
  async login({ rootState,commit }, userForm){
        const user = await api.login(userForm)
        .then(res =>{ 
          window.localStorage.setItem('token', res.data.token);
          commit("setToken", user.token);
          commit("setError", null);
          router.push("/");
        })
        .catch(err => {
            commit("setError", err.response.data);
        });  
  },
  logout: ({ commit }) => {
    window.localStorage.removeItem('token');
    commit("setToken", null);
    commit("setError", null);
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
