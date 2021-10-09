<template>
  <div class="form-login-container">
    <form class="form-login" @submit.prevent>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-envelope"></i>
        </div>
        <input type="email" placeholder="Email" v-model="user.email" />
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Password" v-model="user.password" />
      </div>
      <input type="submit" value="Login" v-on:click="login()" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "loginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["changeErrorMessageAction", "changeShowErrorAction"]),
    login() {
      let data = this.user;
      let config = {
        method: "post",
        url: "http://127.0.0.1:8001/api/login?",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          let { error } = response.data;
          if (error) {
            this.changeErrorMessageAction(error);
            this.changeShowErrorAction(true);
            setTimeout(() => {
              this.changeShowErrorAction(false);
            }, 5000);
          } else {
            this.user.email = "";
            this.user.password = "";
            let { user } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
