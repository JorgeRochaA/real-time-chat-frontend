<template>
  <div>
    <div class="card-container">
      <div class="card-info">
        <div class="username">
          <h4>{{ message.username }}</h4>
        </div>
        <div class="info">
          <h4>{{ message.hour }} | {{ message.date }}</h4>
        </div>
      </div>
      <div :class="isMessageUser" id="card-message-container">
        <div class="username-photo-container">
          <div
            class="photo"
            :style="{ 'background-color': message.username_color }"
          >
            <img :src="message.user_picture" alt="user-photo" />
          </div>
        </div>
        <div
          class="message"
          :style="{ 'background-color': message.username_color }"
        >
          <p>{{ message.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageCard",
  props: {
    message: null,
    isMessageUser: null,
  },
};
</script>

<style scoped lang="scss">
.card-container {
  height: 150px;
  width: 450px;

  .card-info {
    height: 30%;
    width: 100%;
    display: flex;

    .username {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      height: 100%;
      width: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      h4 {
        margin-right: 10px;
        color: #aba8a5;
      }
    }
  }
  #card-message-container {
    height: 70%;
    width: 100%;
    display: flex;

    .username-photo-container {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      .photo {
        height: 85%;
        width: 70%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 90%;
          width: 90%;
        }
      }
    }
    .message {
      height: 100%;
      width: 70%;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      p {
        height: 80%;
        width: 90%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &.user {
      flex-direction: row-reverse;
    }
  }
}
@media screen and (max-width: 500px) {
  .card-container {
    width: 95%;
    background-color: yellowgreen;
    left: 0;
    right: 0;
    margin: auto;
    .username-photo-container {
      width: 25% !important;
      justify-content: flex-start !important;
      .photo {
        height: 75% !important;
        width: 80% !important;
      }
    }
    .message {
      width: 100% !important;
    }
  }
}
</style>
