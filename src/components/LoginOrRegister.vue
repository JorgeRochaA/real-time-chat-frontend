<template>
  <div class="loginOrRegister">
    <button class="active" id="login" v-on:click="loginOrSignUp('login')">
      Login
    </button>
    <button id="signUp" v-on:click="loginOrSignUp('signUp')">Sign Up</button>
  </div>
</template>
<script>
export default {
  name: "loginOrRegister",
  methods: {
    loginOrSignUp(value) {
      let signUp = document.getElementById("signUp");
      let login = document.getElementById("login");
      if (value === "login") {
        signUp.classList.remove("active");
        login.classList.add("active");
      } else {
        login.classList.remove("active");
        signUp.classList.add("active");
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
  height: 100px;
  width: 90%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    height: 65%;
    width: 45%;
    border-radius: 10px;
    border: none;
    transition: .5s;
    font-size: 1.2rem;
  }
}
</style>
