<template>
  <div>
    <div class="message-container">
      <div class="message-info-container">
       
        <h5>{{ message.date }}</h5>
      </div>
      <div class="username-message-container">
        <div class="userPicture" :style="getUsernameColor">
          <img :src="message.userPicture" alt="user picture" />
        </div>
        <h5>{{ message.username }}</h5>
        <div class="message">
          <p v-if="!message.isImg">{{ message.message }}</p>
          <img v-else :src="message.message" alt="message img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageCard",
  data() {
    return {
      message: {
        username: "Jorge_CR",
        userPicture: "https://i.ibb.co/dDJnkGD/emoji-1.png",
        message:"https://images6.alphacoders.com/874/874982.jpg",
        isImg: true,
        date: "16/9/2021",
        usernameColor: "#2196F3",
      },
    };
  },
  computed: {
    getUsernameColor() {
      return { "background-color": this.message.usernameColor };
    },
  },
};
</script>

<style lang="scss">
.message-container {
  height: 200px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .message-info-container {
    height: 20%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5:nth-child(1) {
      margin-left: 25px;
    }

    h5:nth-child(2) {
      margin-right: 10px;
    }
  }
  .username-message-container {
    height: 70%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   

    .userPicture {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin-left: 4%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .message {
      height: 100%;
      width: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 90%;
        word-wrap: break-word;
      }
      img{
          height: 90%;
          width: 90%;
          
      }
    }
  }
}
</style>