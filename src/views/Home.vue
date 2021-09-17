<template>
  <div>
      home
      <MessageCard/>
      <SuccessAlert/>
  </div>
</template>

<script>
import MessageCard from "../components/MessageCard.vue";
import SuccessAlert from "../components/SuccessAlert.vue";
export default {
name :"Home",
components:{
  MessageCard,
  SuccessAlert,
}
}
</script>

<style>

</style>