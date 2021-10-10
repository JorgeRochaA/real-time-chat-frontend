import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    showSuccessAlert: false,
    showErrorAlert: false,
    errorMessage: "",
    loginOrSignUp: true, // if this is true is goin to show the login form on Login view (Login.vue)
    // opposite case is goin to show the register form
  },
  mutations: {
    changeShowSuccessValue(state, payload) {
      state.showSuccessAlert = payload;
    },
    changeShowErrorValue(state, payload) {
      state.showErrorAlert = payload;
    },
    changeErrorMessageValue(state, payload) {
      state.errorMessage = payload;
    },
    changeLoginOrSignUpValue(state, payload) {
      state.loginOrSignUp = payload;
    },
    changeMessagesValue(state, payload) {
      state.messages = payload;
    },
    addMessageValue(state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    changeShowSuccessAction({ commit }, payload) {
      commit("changeShowSuccessValue", payload);
    },
    changeShowErrorAction({ commit }, payload) {
      commit("changeShowErrorValue", payload);
    },
    changeErrorMessageAction({ commit }, payload) {
      commit("changeErrorMessageValue", payload);
    },
    changeLoginOrSignUpAction({ commit }, payload) {
      commit("changeLoginOrSignUpValue", payload);
    },
    changeMessagesAction({ commit }, payload) {
      commit("changeMessagesValue", payload);
    },
    addMessageValueAction({ commit }, payload) {
      commit("addMessageValue", payload);
    },
  },
  modules: {},
  getters: {},
});
