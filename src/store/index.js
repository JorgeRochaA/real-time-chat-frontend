import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        username: "Jorge_CR",
        message: "Hello People!",
        userPicture:"https://i.ibb.co/dDJnkGD/emoji-1.png",
        isImg: false,
        date: "16/9/2021",
        usernameColor: "#2196F3",
      },
      {
        username: "Vipper Code",
        message: "http://lineadecodigo.com/wp-content/uploads/2014/04/css.png",
        userPicture:"https://i.ibb.co/dDJnkGD/emoji-1.png",
        isImg: true,
        date: "16/9/2021",
        usernameColor: "#6200EA",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getMessages: (state) => state.messages,
  },
});
