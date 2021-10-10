<template>
  <div :class="this.showAlert" id="alert-info">
    <div class="info-images">
      <img src="../assets/alert-images/info.svg" alt="info-icon" />
      <img src="../assets/alert-images/blueBubbles.svg" alt="bubbles-icon" />
    </div>
    <div class="info-message">
      <h2>Info!</h2>
      <h5>{{ infoMessage }}</h5>
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
  name: "infoAlert",
  computed: {
    ...mapState(["showInfoAlert", "infoMessage"]),
    showAlert() {
      let showInfoAlertValue = this.showInfoAlert;
      if (showInfoAlertValue) {
        return "show";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(["changeShowInfoAction"]),

    hideAlert() {
      this.changeShowInfoAction(false);
    },
  },
};
</script>

<style scoped lang="scss">
#alert-info {
  height: 150px;
  width: 450px;
  background-color: #3282b8;
  position: relative;
  border-radius: 15px;
  display: flex;
  position: fixed;
  top: 1000px;
  left: 50%;
  transform: translateX(-50%);
  transition: .5s;
  z-index: 11;

  .info-images {
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

  .info-message {
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
        color: #0f4c75;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  &.show {
    top: 10%;
  }
}
@media only screen and (min-width: 100px) and (max-width: 991px) {
  #alert-info {
    &.show {
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
@media only screen and (max-width: 575px) {
  #alert-info {
    width: 90%;

    &.show {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
