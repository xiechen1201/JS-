const state = {
  userName: "张三",
  age: 20
};

const getters = {
  userInfoGroup(state) {
    return state.userName + state.age;
  }
};

const mutations = {
  updateUserName({}) {}
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
