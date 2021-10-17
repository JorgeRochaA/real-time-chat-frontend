<template>
  <div :class="this.showSusccessAlertClass" id="alert-success">
    <div class="alert-images">
      <img src="../assets/alert-images/success.svg" alt="success-icon" />
      <img src="../assets/alert-images/greenBubbles.svg" alt="bubbles-icon" />
    </div>
    <div class="alert-message">
      <h2>Success!</h2>
      <h5>your message was send</h5>
    </div>
    <div class="close-alert">
      <div class="exit">
        <i v-on:click="hideAlert()" class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "successAlert",
  computed: {
    ...mapState(["showSuccessAlert"]),
    showSusccessAlertClass() {
      let showSuccessAlertValue = this.showSuccessAlert;
      if (showSuccessAlertValue) {
        return "show";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(["changeShowSuccessAction"]),
    hideAlert() {
      this.changeShowSuccessAction(false);
    },
  },
};
</script>

<style scoped lang="scss">
#alert-success {
  height: 150px;
  width: 450px;
  background-color: #04a65b;
  position: relative;
  border-radius: 15px;
  display: flex;
  position: fixed;
  top: 10%;
  left: 10000px;
  transition: 1s;
z-index: 9;
  .alert-images {
    height: 100%;
    width: 20%;

    img:nth-child(1) {
      position: absolute;
      top: -20%;
      left: 5%;
    }

    img:nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0 0 0 15px;
    }
  }

  .alert-message {
    height: 150px;
    width: 60%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;

    h2 {
      align-self: flex-end;
      margin-right: 37px;
    }
    h5 {
      align-self: flex-end;
    }
  }

  .close-alert {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: flex-end;

    .exit {
      height: 40%;
      width: 70%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;

      i {
        transition: 0.5s;
      }
      &:hover {
        color: #2c7721;
      }
    }
    &:hover {
      cursor: pointer;
      color: #2c7721;
    }
  }

  &.show {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media only screen and (min-width: 100px) and (max-width: 991px) {
  #alert-success {
    &.show {
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }
    width: 98% !important;
  }
}
@media only screen and (max-width: 575px) {
  #alert-success {
    &.show {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
