<template>
  <div>
    <div class="card-container">
      <div class="card-info">
        <div class="username">
          <h4>Jorge_CR</h4>
        </div>
        <div class="info">
          <h4>10:45 PM | Yesterday</h4>
        </div>
      </div>
      <div class="card-message-container">
        <div class="username-photo-container">
          <div class="photo" :style="{ 'background-color': '#2196F3' }">
            <img src="https://i.ibb.co/dDJnkGD/emoji-1.png" alt="user-photo" />
          </div>
        </div>
        <div class="message" :style="{ 'background-color': '#2196F3' }">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorem officia minus. Fugiat minima consequatur laboriosam labore impedit commodi praesentium</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "messageCard",
  data() {
    return {
      messages: [],
      user: {
        name: "",
      },
      colors: [],
      message: {
        username: "Jorge_CR",
        message: "Hello People!",
        userPicture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        date: "15/9/2021",
        usernameColor: "#2196F3",
      },
    };
  },
  mounted() {
    this.messages = this.getMessagesFromStore;
    this.user = this.getUserFromStore;
    this.generar();
  },
  computed: {
    getMessagesFromStore() {
      return this.getMessages();
    },
    getUserFromStore() {
      return this.getUser();
    },
  },
  methods: {
    ...mapGetters(["getMessages", "getUser"]),
    generarLetra() {
      var letras = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];
      var numero = (Math.random() * 15).toFixed(0);
      return letras[numero];
    },
    colorHEX() {
      var coolor = "";
      for (var i = 0; i < 6; i++) {
        coolor = coolor + this.generarLetra();
      }
      return "#" + coolor;
    },
    generar() {
      for (let i = 0; i < 30; i++) {
        let color = this.colorHEX();

        this.colors.push(color);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card-message-container.user{
  flex-direction: row-reverse;
}
.card-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 450px;
  // background-color: gold;
  .card-info {
    height: 30%;
    width: 100%;
    // background-color: green;
    display: flex;
    .username {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: teal;
    }
    .info {
      height: 100%;
      width: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      // background-color: gold;
      h4 {
        margin-right: 10px;
        color: #aba8a5;
      }
    }
  }
  .card-message-container {
    height: 70%;
    width: 100%;
    //  background-color: red;
    display: flex;

    .username-photo-container {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      .photo {
        height: 85%;
        width: 70%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 90%;
          width: 90%;
        }
      }
    }
    .message {
      height: 100%;
      width: 70%;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      p{
        height: 80%;
        width: 90%;
        color: white;
      }
    }
  }
}
</style>
