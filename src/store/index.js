import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    showSuccessAlert: false,
    showErrorAlert: false,
    showInfoAlert: false,
    errorMessage: "",
    infoMessage: "Jorge left the room",
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
    changeShowInfoValue(state, payload) {
      state.showInfoAlert = payload;
    },
    changeErrorMessageValue(state, payload) {
      state.errorMessage = payload;
    },
    changeInfoMessageValue(state, payload) {
      state.infoMessage = payload;
    },
    changeLoginOrSignUpValue(state, payload) {
      state.loginOrSignUp = payload;
    },
    changeMessagesValue(state, payload) {
      state.messages = payload;
    },
    addMessageValue(state, payload) {
      let newArray = [...state.messages, payload];
      state.messages = newArray;
    },
  },
  actions: {
    changeShowSuccessAction({ commit }, payload) {
      commit("changeShowSuccessValue", payload);
    },
    changeShowErrorAction({ commit }, payload) {
      commit("changeShowErrorValue", payload);
    },
    changeShowInfoAction({ commit }, payload) {
      commit("changeShowInfoValue", payload);
    },
    changeErrorMessageAction({ commit }, payload) {
      commit("changeErrorMessageValue", payload);
    },
    changeInfoMessageAction({ commit }, payload) {
      commit("changeInfoMessageValue", payload);
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
