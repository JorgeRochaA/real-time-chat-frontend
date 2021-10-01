<template>
  <div :class="this.showAlert" id="alert-error">
    <div class="alert-images">
      <img src="../assets/alert-images/fail.svg" alt="fail-icon" />
      <img src="../assets/alert-images/redBubbles.svg" alt="bubbles-icon" />
    </div>
    <div class="alert-message">
      <h2>Error!</h2>
      <h5>{{ errorMessage }}</h5>
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
  name: "errorAlert",
  computed: {
    ...mapState(["showErrorAlert", "errorMessage"]),
    showAlert() {
      let showErrorAlertValue = this.showErrorAlert;
      if (showErrorAlertValue) {
        return "show";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(["changeShowErrorAction"]),

    hideAlert() {
      this.changeShowErrorAction(false);
    },
  },
};
</script>

<style scoped lang="scss">
#alert-error {
  height: 150px;
  width: 450px;
  background-color: #fc2e20;
  position: relative;
  border-radius: 15px;
  display: flex;
  position: fixed;
  top: 10%;
  left: 10000px;
  transition: 1s;

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
    width: 70%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;

    h2 {
      position: relative;
      z-index: 5;
    }
    h5 {
      position: relative;
      z-index: 5;
    }
  }

  .close-alert {
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: flex-end;

    .exit {
      height: 40%;
      width: 100%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      margin-right: 10px;

      i {
        transition: 0.5s;
      }
      &:hover {
        color: #940000;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  &.show {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media only screen and (min-width: 100px) and (max-width: 991px) {
  #alert-error {
    &.show {
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
@media only screen and (max-width: 575px) {
  #alert-error {
    width: 90%;

    &.show {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
