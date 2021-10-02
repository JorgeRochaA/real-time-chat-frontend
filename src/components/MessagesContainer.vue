<template>
  <div class="messageContainer">
    <div v-for="(message, index) in messages" :key="index">
      <div v-if="message.username == user.username" class="userCard">
        <MessageCard :message="message" :isMessageUser="isMessageUser" />
      </div>
      <MessageCard class="card" v-else :message="message" />
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
      isMessageUser: "user",
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
    },
  },
};
</script>
<style scoped lang="scss">
.messageContainer {
    padding: 20px 0;
  height: 70vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .userCard {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
  }
  .card {
    margin-left: 50px;
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
    .userCard{
        margin-right: 0 !important;
    }
    .card{
        margin-left: 0 !important;
    }
}
</style>
