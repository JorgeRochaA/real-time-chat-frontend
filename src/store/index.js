import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        username: "Jorge_CR",
        message: "Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!Hello People!",
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
    user:{
      name:"Jorge_CR"
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getMessages: (state) => state.messages,
    getUser: (state) => state.user,
  },
});
