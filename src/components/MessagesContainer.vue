<template>
  <div class="messageContainer">
    <div v-for="(message, index) in messages" :key="index">
      <div class="user-message" v-if="'Jorge_CRr' === message.username">
        <MessageCard :message="message" />
      </div>
      <div class="others-message" v-else>
        <MessageCard :message="message" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import MessageCard from "../components/MessageCard.vue";
export default {
  name: "messagesContainer",
  components: {
    MessageCard,
  },
  data() {
    return {
      messages: [],
      user: [],
    };
  },
  mounted() {
    this.messages = this.getMessagesFromStore;
    this.getUser();
  },
  computed: {
    getMessagesFromStore() {
      return this.getMessages();
    },
  },
  methods: {
    ...mapGetters(["getMessages"]),
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
    },
  },
};
</script>
<style scoped lang="scss">
.messageContainer {
  padding-bottom: 30px;
  height: 70vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .others-message {
    margin-left: 50px;
  }

  .user-message {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  .messageContainer {
    align-items: center;

    .others-message {
      margin-left: 0;
    }

    .user-message {
      margin-right: 0px;
    }
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .messageContainer {
    padding-bottom: 50px;
  }
}
</style>
