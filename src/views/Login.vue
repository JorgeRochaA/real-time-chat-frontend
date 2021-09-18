<template>
  <div class="login">
    <div class="form-container">
      <div class="app-logo">
        <img src="../assets/logo/logo.png" alt="app logo" />
      </div>
      <div class="spacer"></div>
      <div class="form">
        <LoginOrRegister />
      </div>
    </div>
  </div>
</template>

<script>
import LoginOrRegister from "../components/LoginOrRegister.vue";
export default {
  name: "Login",
  components: {
    LoginOrRegister,
  },
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100%;
  background-color: #2196f3;
  display: flex;
  align-items: flex-end;

  .form-container {
    height: 80%;
    width: 100%;
    background-color: whitesmoke;
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
</style>
