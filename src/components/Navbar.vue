<template>
  <div class="navbar">
      <div class="username">
       <h2 :style="{color:user.username_color}">{{ user.username }}</h2>
      </div>
    <div class="logout">
      <div class="button" v-on:click="logout()"><i class="fas fa-sign-out-alt"></i></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
...mapActions(["changeLoginOrSignUpAction"]),
      
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
    logout() {
      let config = {
        method: "post",
        url: "http://127.0.0.1:8001/api/logout",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      axios(config)
        .then((response) => {
         let {success} = response.data;
         if(success){
          localStorage.removeItem("user");
            this.changeLoginOrSignUpAction(true);
          this.$router.push("/login");
         }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("user");
          this.$router.push("/login");
        });
    },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  height: 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logout,
  .username {
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .button {
      height: 50px;
      width: 50px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid #fc2e20;
      z-index: 1;
      cursor: pointer;
      font-size: 1.2rem;
      overflow: hidden;
      color: #fc2e20;
      border-radius: 10px;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0%;
        width: 100%;
        background-color: #fc2e20;
        z-index: -1;
        transition: 0.25s;
      }
      &:hover {
        color: white;

        &::before {
          height: 100%;
        }
      }
    }
  }
  .username{
    margin-left: 20px;
  }
  .logout{
    margin-right: 20px;
  }
}
</style>
