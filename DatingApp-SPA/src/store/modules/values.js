import api from "../../api/values";


const state = {
  values:[],
};

const getters = {
  allValues: state => state.values,
};

const actions = {
  async fetchValues({commit}){
        const response = await api.getAllValues();
        commit("setValues", response);
  },
};

const mutations = {
  setValues: (state, values) => {
    state.values = values;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
