<template>
  <div class="alert-error" id="alert-error">
    <div class="alert-images">
      <img src="../assets/alert-images/fail.svg" alt="fail-icon" />
      <img src="../assets/alert-images/redBubbles.svg" alt="bubbles-icon" />
    </div>
    <div class="alert-message">
      <h2>Error!</h2>
      <h5>something happend</h5>
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
  name: "errorAlert",
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
      return this.getShowErrorValue();
    },
  },
  watch: {
    show: function () {
      let value = this.getShowErrorValue();
      let alertCard = document.getElementById("alert-error");
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
    ...mapGetters(["getShowErrorValue"]),
    ...mapActions(["changeShowErrorAction"]),

    hideAlert() {
      this.changeShowErrorAction(false);
      this.show = "";
    },
  },
};
</script>

<style scoped lang="scss">
.alert-error.show {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.alert-error {
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
        color: #940000;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px){
.alert-error.show{
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
}
@media only screen and (max-width: 575px){
.alert-error.show{
    left: 50%;
    transform: translateX(-50%);
}
}
</style>