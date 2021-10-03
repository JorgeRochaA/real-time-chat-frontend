import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        username: "Jorge_CRr",
        message: "Hello People!",
        user_picture: "https://i.ibb.co/HP0N2d7/robot.png",
        date: "15/9/2021",
        hour:"10:45 PM",
        username_color: "#a6740f",
      },
      {
        username: "Vipper Code",
        message:"adviodnvsndlvnsldvnslkdvnsldvnslkdnvklsdnvklsndvklsdnvlksdnvklsdnvsdvnsdvnksldvnklsdnvksdvsdvzdvsdvsdvsvsvsdvsdvsdvsdvsdvsdvsdvsdvsdvfnbkldfnbkldfnb",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
      {
        username: "Vipper Code",
        message: "Hello Jorge!",
        user_picture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "16/9/2021",
        hour:"10:45 PM",
        username_color: "#6200EA",
      },
    ],
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
  },
});
