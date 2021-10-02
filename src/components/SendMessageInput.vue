<template>
  <div class="sendMessage">
    <input type="text" v-model="message" placeholder="  Write Something..." />
    <div class="button" v-on:click="sendMessage()">
      <i class="fas fa-paper-plane" id="plane"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "sendMessageInput",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (!this.message == "") {
        let plane = document.getElementById("plane");
        plane.classList.add("send");
        this.message = "";
        setTimeout(() => {
          plane.classList.remove("send");
        }, 1000);
      } else {
        alert("fill the fields");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.sendMessage {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  input {
    height: 50%;
    width: 90%;
    padding: 0 10px;
    border-radius: 10px;
    border: 2px solid #e9e9e9;
  }

  .button {
    height: 50px;
    width: 50px;
    background-color: #4d7dff;
    border-radius: 10px;
    border: none;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    &:hover i {
      transform: scale(1.2);
    }

    i {
      color: white;
      transition: 1s;
      &.send {
        animation: send 1s 1;
      }
    }
  }
}
@keyframes send {
  50% {
    transform: translateX(50px) translateY(-50px);
  }
  75% {
    transform: translateX(-50px) translateY(50px);
    color: #4d7dff;
  }
  100% {
    transform: translateX(0px) translateY(-0px);
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  input{
      width: 80% !important;
  }
}
</style>
