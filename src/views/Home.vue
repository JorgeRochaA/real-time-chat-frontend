<template>
  <div>
    <Navbar/>
      <MessageCard/>
      <SuccessAlert/>
      <ErrorAlert/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MessageCard from "../components/MessageCard.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
export default {
name :"Home",
components:{
  Navbar,
  MessageCard,
  SuccessAlert,
  ErrorAlert,
}
}
</script>

<style>

</style>