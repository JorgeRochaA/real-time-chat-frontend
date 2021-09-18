<template>
  <div class="register-form-container">
    <form class="register-form">
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-id-card-alt"></i>
        </div>
        <input type="text" placeholder="Username">
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-envelope"></i>
        </div>
        <input type="email" placeholder="Email">
      </div>
      <div class="input-container">
        <div class="input-logo">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Password">
      </div>
      <input type="submit" />
    </form>
  </div>
</template>
<script>
export default {
  name: "registerForm",
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
      input[type="email"],
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
