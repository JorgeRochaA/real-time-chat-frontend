<template>
  <div class="alert-success" id="alert-success">
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "successAlert",
  data() {
    return {
      show: "",
    };
  },
  mounted() {
    this.show = this.showValue;
    this.show;
  },
  computed: {
    showValue() {
      return this.getShowSuccessValue();
    },
  },
  watch: {
    show: function () {
      let value = this.getShowSuccessValue();
      let alertCard = document.getElementById("alert-success");
      if (value == true) {
        setTimeout(function () {
          alertCard.classList.add("show");
        }, 100);
      } else {
          alertCard.style.transition = "3s";
          alertCard.classList.remove("show");
      }
    },
  },
  methods: {
    ...mapGetters(["getShowSuccessValue"]),
    ...mapActions(["changeShowSuccessAction"]),

    hideAlert() {
      this.changeShowSuccessAction(false);
      this.show = "";
    },
  },
};
</script>

<style scoped lang="scss">
.alert-success.show {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.alert-success {
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

    h2{
        margin: 0;
        align-self: flex-end;
        margin-right: 37px;
    }
    h5{
        margin: 0;
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
}
@media only screen and (min-width: 768px) and (max-width: 991px){
.alert-success.show{
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
}
@media only screen and (max-width: 575px){
.alert-success.show{
    left: 50%;
    transform: translateX(-50%);
}
}
</style>