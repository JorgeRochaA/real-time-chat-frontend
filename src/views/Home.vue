<template>
  <div>
    <Loader id="loader" />
    <Navbar />
    <MessagesContainer />
    <SuccessAlert />
    <ErrorAlert />
    <InfoAlert/>
    <SendMessageInput />
  </div>
</template>
<script src="https://js.pusher.com/7.0/pusher.min.js"></script>
<script>
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";
import MessagesContainer from "../components/MessagesContainer.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
import InfoAlert from "../components/InfoAlert.vue";
import SendMessageInput from "../components/SendMessageInput.vue";
import axios from "axios";
import Pusher from "pusher-js";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Loader,
    Navbar,
    MessagesContainer,
    SuccessAlert,
    ErrorAlert,
    InfoAlert,
    SendMessageInput,
  },
  mounted() {
    this.getMessages();
    this.connectionPusher();
  },
  methods: {
    ...mapActions(["changeMessagesAction", "addMessageValueAction"]),
    connectionPusher() {
      const pusher = new Pusher("86a4461e82a560d1d849", {
        cluster: "us2",
      });

      const channel = pusher.subscribe("chat");
      channel.bind("message", (data) =>{
        this.addMessageValueAction(JSON.parse(data.message));
        data = null;
       this.scrollBottom();
      });
    },
    scrollBottom() {
     setTimeout(() => {
        let container = document.getElementById("messageContainer");
      let height = container.clientHeight;
      container.scrollTo(0, height * 5);
     }, 1000);
    },
    getMessages() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
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
            let loader = document.getElementById("loader");
            loader.classList.add("hide");
            loader.style.display = "none";
              this.scrollBottom();
          })
          .catch((err) => {
            console.log(err);
            if (err.response) {
              let { message } = err.response.data;
              if (message == "Unauthenticated.") {
                localStorage.removeItem("user");
                this.$router.push("/login");
              }
            }
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.hide {
  transition: 0.5s;
  opacity: 0;
}
</style>
