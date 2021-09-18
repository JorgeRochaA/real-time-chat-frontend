<template>
  <div>
      <MessageCard/>
      <SuccessAlert/>
      <ErrorAlert/>
  </div>
</template>

<script>
import MessageCard from "../components/MessageCard.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
export default {
name :"Home",
components:{
  MessageCard,
  SuccessAlert,
  ErrorAlert,
}
}
</script>

<style>

</style>