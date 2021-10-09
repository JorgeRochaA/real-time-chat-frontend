<template>
  <div class="sendMessage">
    <input
      type="text"
      v-model="messageInfo.message"
      placeholder="  Write Something..."
    />
    <div class="button" v-on:click="sendMessage()">
      <i class="fas fa-paper-plane" id="plane"></i>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "sendMessageInput",
  data() {
    return {
      messageInfo: {
        message: "",
        date: "",
        hour: "",
        username_id: "",
        token: "",
      },
    };
  },
  methods: {
    ...mapActions(["changeShowSuccessAction", "changeMessagesAction"]),
      scrollBottom() {
      let container = document.getElementById("messageContainer");
      let height = container.clientHeight;
      container.scrollTo(0, height * 5);
    },
    cleanUserForm() {
      this.messageInfo.message = "";
      this.messageInfo.date = "";
      this.messageInfo.hour = "";
      this.messageInfo.username_id = "";
      this.messageInfo.token = "";
    },
    getDate() {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      this.messageInfo.date = `${day}/${month}/${year}`;
    },
    getHour() {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      var ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      this.messageInfo.hour = `${hour}:${minutes}${ampm}`;
    },
    sendMessage() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user == null) {
        this.$router.push("/login");
      } else {
        let config = {
          method: "post",
          url: "http://127.0.0.1:8001/api/message/create?",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          data: this.messageInfo,
        };
        if (!this.messageInfo.message == "") {
          let plane = document.getElementById("plane");
          plane.classList.add("send");
          this.getDate();
          this.getHour();
          this.messageInfo.token = user.token;
          this.messageInfo.username_id = user.id;
          setTimeout(() => {
            plane.classList.remove("send");
          }, 1000);
          axios(config)
            .then((response) => {
              let { success } = response.data;
              if (success) {
                this.cleanUserForm();
                this.changeShowSuccessAction(true);
                this.getMessages();
                setTimeout(() => {
                  this.changeShowSuccessAction(false);
                }, 3000);
              } else {
                console.log(response.data);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("fill the fields");
        }
      }
    },
    getMessages() {
      let user = JSON.parse(localStorage.getItem("user"));
      let config = {
        method: "get",
        url: "http://127.0.0.1:8001/api/message/get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios(config)
        .then((response) => {
          this.changeMessagesAction(response.data);
          setTimeout(() => {
            this.scrollBottom();
          }, 100);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.sendMessage {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  input {
    height: 50%;
    width: 90%;
    padding: 0 10px;
    border-radius: 10px;
    border: 2px solid #e9e9e9;
  }

  .button {
    height: 50px;
    width: 50px;
    background-color: #4d7dff;
    border-radius: 10px;
    border: none;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    &:hover i {
      transform: scale(1.2);
    }

    i {
      color: white;
      transition: 1s;
      &.send {
        animation: send 1s 1;
      }
    }
  }
}
@keyframes send {
  50% {
    transform: translateX(50px) translateY(-50px);
  }
  75% {
    transform: translateX(-50px) translateY(50px);
    color: #4d7dff;
  }
  100% {
    transform: translateX(0px) translateY(-0px);
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  input {
    width: 80% !important;
  }
}
</style>
