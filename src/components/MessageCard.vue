<template>
  <div>
    <div
      class="card-container"
      v-for="(message, index) in messages"
      :key="index"
    >
      <div class="message-info-container">
        <h4
          v-if="user.name != message.username"
          :style="{ color: message.usernameColor }"
        >
          {{ message.username }}
        </h4>
        <h4 v-else :style="{ color: message.usernameColor }">Your Message</h4>
        <h5>{{ message.date }}</h5>
      </div>
      <div class="username-message-container">
        <div class="user-container userMessage">
          <div
            class="userpicture"
            :style="{ 'background-color': message.usernameColor }"
          >
            <img :src="message.userPicture" alt="user picture" />
          </div>
        </div>
        <div class="message-container">
          <p>{{ message.message }}</p>
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
    };
  },
  mounted() {
    this.messages = this.getMessagesFromStore;
    this.user = this.getUserFromStore;
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
  },
};
</script>

<style lang="scss">
.card-container {
  height: 200px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0px;

  .message-info-container {
    height: 20%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin-left: 20px;
    }

    h5 {
      margin-right: 10px;
    }
  }
  .username-message-container {
    height: 70%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-container {
      height: 100%;
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background: crimson;
 
      &:hover{
        display: none;
      }

      .userpicture {
        height: 85%;
        width: 85%;
        border-radius: 50%;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .message-container {
      height: 100%;
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 90%;
      }
    }
  }
}
</style>
