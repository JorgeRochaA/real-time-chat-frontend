<template>
  <div>
    <Loader id="loader" />
    <Navbar />
     <MessagesContainer/>
    <SuccessAlert />
    <ErrorAlert />
    <SendMessageInput/>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";
import MessagesContainer from "../components/MessagesContainer.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
import SendMessageInput from "../components/SendMessageInput.vue";
export default {
  name: "Home",
  components: {
    Loader,
    Navbar,
    MessagesContainer,
    SuccessAlert,
    ErrorAlert,
    SendMessageInput,
  },
  mounted() {
    this.loading();
  },
  methods: {
    loading() {
      let loader = document.getElementById("loader");
      setTimeout(() => {
        loader.classList.add("hide");
      }, 3000);
      setTimeout(() => {
        loader.style.display = "none";
      }, 4000);
    },
  },
};
</script>

<style scoped lang="scss">
.hide {
  transition: .5s;
 opacity: 0;
}
</style>
