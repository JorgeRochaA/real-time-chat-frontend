<template>
  <div class="loginOrRegister">
    <button class="active" id="login" v-on:click="loginOrSignUp('login')">
      Login
    </button>
    <button id="signUp" v-on:click="loginOrSignUp('signUp')">Sign Up</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "loginOrRegister",
  methods: {
    ...mapActions(["changeLoginOrSignUpAction"]),
    loginOrSignUp(value) {
      let signUp = document.getElementById("signUp");
      let login = document.getElementById("login");

      if (value === "login") {
        signUp.classList.remove("active");
        login.classList.add("active");
        this.changeLoginOrSignUpAction(true);
      } else {
        login.classList.remove("active");
        signUp.classList.add("active");
        this.changeLoginOrSignUpAction(false);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.active {
  background-color: #2196f3;
  color: white;
}
.loginOrRegister {
  height: 15%;
  width: 90%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  button {
    height: 65%;
    width: 45%;
    border-radius: 10px;
    border: none;
    transition: 0.5s;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
