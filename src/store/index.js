import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        username: "Jorge_CR",
        message: "Hello People!",
        userPicture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "15/9/2021",
        usernameColor: "#2196F3",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        userPicture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        usernameColor: "#6200EA",
      },
    ],
    user: {
      name: "Jorge_CR",
    },
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
  },
  modules: {},
  getters: {
    getMessages: (state) => state.messages,
    getUser: (state) => state.user,
  },
});
