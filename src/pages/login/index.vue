<template>
   <div class="row wrapper">
      <div class='col-6'>
        <div class="image-login"></div>
      </div>
      <div class='col-6'>
        <div class="wrapper-login-form">
          <div class="logo" />
          <h1>đăng nhập</h1>
          <LoginForm />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from './login_form.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Home extends Vue {}
</script>
<style>
.wrapper {
  background: url('../../assets/images/background.jpeg');
  background-size: contain;
  background-repeat: round;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.wrapper .image-login {
  background-image: url('../../assets/images/image-login.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 600px;
  min-height: 600px;
}

.wrapper  .wrapper-login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: calc(100vh - 30px);
}

.wrapper .wrapper-login-form .logo {
  background: url('../../assets/images/logo.png') no-repeat;
  background-size: contain;
  min-width: 200px;
  min-height: 50px;
}

.wrapper .wrapper-login-form h1 {
  font-weight: 600;
  /* font-size: 24px; */
  line-height: 28px;
  text-transform: uppercase;
  color: #56B8D4;
  margin: 25px;
}

.wrapper .wrapper-login-form form {
  width: 100%;
}

.wrapper .wrapper-login-form .item-wrapper {
  margin-bottom: 20px;
  text-align: left;
}

.wrapper .wrapper-login-form .item-wrapper.button {
  display: flex;
  justify-content: center;
}

.wrapper .wrapper-login-form .item-wrapper label {
  /* font-weight: 600; */
  font-size: 16px;
}

.wrapper .wrapper-login-form input[type=text],
.wrapper .wrapper-login-form input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  background: hsla(0,0%,100%,.7);
  border-radius: 20px;
  border: 1px solid #56b8d4;
  padding-left: 20px;
}

.wrapper .wrapper-login-form  button {
  height: 46px;
  border-radius: 30px;
  width: 160px;
  margin: auto;
  background-color: #56b8d4;
  border: 1px solid #d9d9d9;
  color: #fff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  cursor: pointer;
}

.wrapper .wrapper-login-form button:hover {
  opacity: 0.8;
}

.wrapper .wrapper-login-form .error-message {
  color: red;
}
</style>
