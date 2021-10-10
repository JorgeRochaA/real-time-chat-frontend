<template>
  <div class="login">
    <div class="form-container">
      <div class="app-logo">
        <img src="../assets/logo/logo.png" alt="app logo" />
      </div>
      <div class="spacer"></div>
      <div class="form">
        <LoginOrRegister />
        <LoginForm v-if="this.loginOrSignUp" />
        <RegisterForm v-else />
        <ErrorAlert />
      </div>
    </div>
  </div>
</template>

<script>
import LoginOrRegister from "../components/LoginOrRegister.vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
import { mapState } from "vuex";
export default {
  name: "Login",
  components: {
    LoginOrRegister,
    LoginForm,
    RegisterForm,
    ErrorAlert,
  },
  computed: {
    ...mapState(["loginOrSignUp", "showErrorAlert"]),
  },
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100%;
  background-color: #2196f3;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .form-container {
    height: 80%;
    width: 70%;
    background-color: white;
    border-radius: 30px 30px 0 0;
    position: relative;

    .app-logo {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -8%;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 70%;
        width: 70%;
      }
    }
    .spacer {
      height: 20%;
    }
    .form {
      height: 80%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
@media screen and (max-width: 700px) and (orientation: portrait) {
  .form-container {
    width: 90% !important;
  }
}
@media (min-width: 320px) and (orientation: landscape) and (max-width: 900px) {
  /* smartphones, tablets landscape*/
  .login {
    height: 700px;
  }
  .form {
    margin-top: 50px;
    height: 375px !important;
  }
}
@media (min-width: 900px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      margin-top: 70px;
      height: 85% !important;
      width: 60% !important;
    }
  }
}
</style>
