<template>
  <div class="login">
    <router-link to="/my">
      <div class="login-back">
        <i class="iconfont" slot="icon">&#xe603;</i>
      </div>
    </router-link>
    <div class="login-text">
      <span>账号登录</span>
    </div>
    <div class="login-user">
      <div class="login-user-input">
        <input type="text" v-model="userName" placeholder="请输入要手机号/账号">
      </div>
    </div>
    <div class="login-password">
      <div class="login-user-input">
        <input type="password" v-model="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-but">
      <mt-button class="login-but-on" @click.native="handleBut" ref="but" type="danger">登录</mt-button>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  mounted() {
    this.userNames = localStorage.getItem("userName");
    this.passwords = localStorage.getItem("password");
  },
  methods: {
    handleBut() {
      if (!window.localStorage) {
        console.log("浏览器不支持localStorage!");
      } else {
        if (
          this.userNames == this.userName &&
          this.passwords == this.password
        ) {
           window.location.href = "http://localhost:8080/my";
        } else {
          MessageBox.alert("请输入正确的账号密码").then(action => {});
          return;
        }
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.login > a {
  display: inline-block;
}
.login-back {
  height: 2rem;
  width: 100%;
}
.login-back > i {
  display: block;
  font-size: 1.5rem;
  padding: 0.2rem 0 0 0.2rem;
  color: tan;
}
.login-text {
  width: 100%;
  float: left;
}
.login-text > span {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-top: 1.7rem;
}
.login-user {
  float: left;
  width: 100%;
}
.login-user-input {
  width: 90%;
  height: 1.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  border-bottom: 0.01rem solid tan;
}
.login-user-input > input {
  width: 100%;
  height: 1.2rem;
  border: none;
  outline: none;
  box-shadow: 0 0 0px 1000px white inset;
}
.login-password {
  width: 100%;
  float: left;
}
.login-but {
  float: left;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
.login-but-on {
  width: 10rem;
}
.login-check {
  float: left;
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.5rem;
  text-align: center;
  margin-top: 0.2rem;
}
.login-check > input {
  position: relative;
  top: 0.1rem;
}
</style>

