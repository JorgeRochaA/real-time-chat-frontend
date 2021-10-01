<template>
  <div>
    <Loader id="loader" />
    <Navbar />
    <MessageCard />
    <SuccessAlert />
    <ErrorAlert />
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";
import MessageCard from "../components/MessageCard.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
export default {
  name: "Home",
  components: {
    Loader,
    Navbar,
    MessageCard,
    SuccessAlert,
    ErrorAlert,
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
