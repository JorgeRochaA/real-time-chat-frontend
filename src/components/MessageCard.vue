<template>
  <div>
    <div class="card-container">
      <div class="info-container">
        <div class="triangle" :style="{'border-bottom-color': message.username_color}"></div>
        <h4 v-if="userMessage == true">Your Message</h4>
         <h4 v-else>{{ message.username }} </h4>
        <h4>| {{ message.hour }}</h4>
      </div>
      <div
        class="message-container"
        :style="{ 'background-color': message.username_color }"
      >
        <p>{{ message.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageCard",
  props: {
    message: null,
    userMessage: null
  },
};
</script>

<style scoped lang="scss">
.card-container {
  height: 150px;
  width: 450px;
  margin-top: 10px;
  position: relative;

  .info-container {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .triangle {
      position: absolute;
      top: -4px;
      right: 0;
      width: 0;
      height: 0;
      border-right: 40px solid transparent;
      border-top: 40px solid transparent;
      border-left: 40px solid transparent;
      border-bottom: 40px solid transparent;
      z-index: -1;
    }

    h4 {
      margin-right: 5px;
      margin-bottom: 10px;
    }
  }
  .message-container {
    height: 100px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      width: 90%;
      height: 90%;
      word-break: break-all;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  .card-container {
    width: 90vw;
    margin-left: 0;
  }
}
</style>
