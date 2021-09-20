<template>
  <div class="form-login-container">
    <form class="form-login" @submit.prevent>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-envelope"></i>
        </div>
        <input type="email" placeholder="Email" />
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Password" />
      </div>
      {{ this.$store.state.showErrorAlert }}
      <input type="submit" value="Login" v-on:click="showAlert()" />
    </form>
  </div>
</template>
<script>
export default {
  name: "loginForm",
  methods: {
    showAlert(){
      this.$store.commit("changeShowErrorValue",true);
    }
  },
};
</script>
<style scoped lang="scss">
.form-login-container {
  height: 70%;
  width: 90%;

  .form-login {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .input-container,
    input[type="submit"] {
      height: 20%;
      width: 90%;
      border: none;
      border-radius: 10px;
      border: 3px solid #2196f3;
      overflow: hidden;
    }

    .input-container {
      display: flex;
      justify-content: space-evenly;
      .input-logo {
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 1.5rem;
        }
      }
      input[type="email"],
      input[type="password"] {
        width: 80%;
        justify-self: flex-end;
        border: none;
        background-color: transparent;
        outline: none;
      }
    }
    input[type="submit"] {
      background-color: #2196f3;
      color: white;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
