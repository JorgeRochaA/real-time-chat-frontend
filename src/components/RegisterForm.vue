<template>
  <div class="register-form-container">
    <form class="register-form" @submit.prevent>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-id-card-alt"></i>
        </div>
        <input type="text" placeholder="Username" v-model="newUser.username" />
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-envelope"></i>
        </div>
        <input type="text" placeholder="Email" v-model="newUser.email" />
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-lock"></i>
        </div>
        <input
          type="password"
          placeholder="Password"
          v-model="newUser.password"
        />
      </div>
      {{ this.$store.state.user }}
      <input type="submit" v-on:click="createUser()" value="Sign Up" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "registerForm",
  data() {
    return {
      newUser: {
        username: "",
        email: "",
        password: "",
        username_color: "",
      },
    };
  },
  methods: {
    ...mapActions(["changeErrorMessageAction", "changeShowErrorAction"]),
    // this two methods are for create a random hex color to put in the varible username_color
    generateLetter() {
      let letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];
      let number = (Math.random() * 15).toFixed(0);
      return letters[number];
    },
    colorHEX() {
      let color = "";
      for (let i = 0; i < 6; i++) {
        color = color + this.generateLetter();
      }
      return "#" + color;
    },
    createUser() {
      this.newUser.username_color = this.colorHEX();
      let data = this.newUser;
      let config = {
        method: "post",
        url: "http://127.0.0.1:8001/api/register?",
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
            this.newUser.username = "";
            this.newUser.email = "";
            this.newUser.password = "";
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
.register-form-container {
  height: 70%;
  width: 90%;

  .register-form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .input-container,
    input[type="submit"] {
      height: 21.25%;
      width: 90%;
      border: none;
      border-radius: 10px;
      border: 3px solid #2196f3;
      overflow: hidden;
    }
    input[type="submit"] {
      background-color: #2196f3;
      color: white;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
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
      input[type="password"],
      input[type="text"] {
        width: 80%;
        justify-self: flex-end;
        border: none;
        background-color: transparent;
        outline: none;
      }
    }
  }
}
</style>
