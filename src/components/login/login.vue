<template>
  <div class="login">
    <router-link to="/my">
      <div class="login-back">
        <i class="iconfont" slot="icon">&#xe603;</i>
      </div>
    </router-link>
    <div class="login-text">
      <span>账号注册</span>
    </div>
    <div class="login-user">
      <div class="login-user-input">
        <input type="text" v-model="userName" placeholder="请输入要注册的手机号/账号">
        <span ref="userNameHint"></span>
      </div>
    </div>
    <div class="login-password">
      <div class="login-user-input">
        <input type="password" v-model="password" placeholder="请输入要注册的密码">
        <span ref="password"></span>
      </div>
    </div>
    <div class="login-but">
      <mt-button class="login-but-on" @click.native="handleBut" ref="but" disabled type="danger">注册</mt-button>
    </div>
    <div class="login-check">
      <input type="checkbox" @click="handleCheck" ref="check">
      <span>
        已阅读并同意
        <span style="border-bottom:0.01rem solid #000;">账号协议、隐私政策</span>和
        <span style="border-bottom:0.01rem solid #000;">商城用户协议</span>
      </span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      disabled: false,
      userName: null,
      password: null
    };
  },
  methods: {
    handleCheck() {
      let check = this.$refs.check;
      let but = this.$refs.but;
      if (check.checked) {
        but.disabled = false;
      } else {
        but.disabled = true;
      }
    },
    handleBut() {
      if (!window.localStorage) {
        console.log("浏览器不支持localStorage!");
      } else {
        let user = this.$store.state.userNameVerify;
        let passwordWeak = this.$store.state.passwordWeak;
        let passwordMiddle = this.$store.state.passwordMiddle;
        let passwordPowerful = this.$store.state.passwordPowerful;
        if (user == "账号合法！" && passwordWeak == "密码强度：弱！") {
          setTimeout(() => {
            MessageBox.alert("注册成功！").then(action => {
              window.location.href = "http://localhost:8080/register";
              localStorage.setItem("userName", this.userName);
              localStorage.setItem(
                "userImage",
                "http://www.soideas.cn/uploads/allimg/111207/0J5304295-12.jpg"
              );
              localStorage.setItem("password", this.password);
            });
          }, 1000);
        } else if (
          passwordMiddle == "密码强度：中！" &&
          passwordPowerful == "密码强度：强！"
        ) {
          setTimeout(() => {
            MessageBox.alert("注册成功！").then(action => {
              window.location.href = "http://localhost:8080/register";
              localStorage.setItem("userName", this.userName);
              localStorage.setItem(
                "userImage",
                "http://www.soideas.cn/uploads/allimg/111207/0J5304295-12.jpg"
              );
              localStorage.setItem("password", this.password);
            });
          }, 1000);
        } else {
          return;
        }
      }
    }
  },
  watch: {
    // val监听前 old后
    userName(val, oldval) {
      let reg = /^1[3456789]\d{8}$/;
      if (reg.test(oldval)) {
        let user = (this.$refs.userNameHint.innerHTML = "账号合法！");
        this.$store.commit("userNameVerify", user);
        if (user) {
          setTimeout(() => {
            this.$refs.userNameHint.innerHTML = null;
          }, 1000);
        }
        return;
      } else if (val == "") {
        this.$refs.userNameHint.innerHTML = "请输入账号！";
        return;
      } else {
        this.$refs.userNameHint.innerHTML = "格式错误！ ";
        return;
      }
    },

    password(val, oldval) {
      let reg = /\d/g;
      let reg1 = /[a-z]/gi;
      let reg2 = /_/g;
      var index = 0;
      this.password = this.password.replace(/^ +| +$/g, ""); //禁止输入空格
      if (val.length >= 6 && val.length <= 12) {
        if (reg.test(val)) {
          index++;
        }
        if (reg1.test(val)) {
          index++;
        }
        if (reg2.test(val)) {
          index++;
        }
        if (index == 1) {
          let weak = (this.$refs.password.innerHTML = "密码强度：弱！");
          this.$store.commit("passwordWeak", weak);
          if (weak) {
            setTimeout(() => {
              this.$refs.password.innerHTML = null;
            }, 1000);
          }
        }
        if (index == 2) {
          let middle = (this.$refs.password.innerHTML = "密码强度：中！");
          this.$store.commit("passwordMiddle", middle);
          if (middle) {
            setTimeout(() => {
              this.$refs.password.innerHTML = null;
            }, 1000);
          }
        }
        if (index == 3) {
          let powerful = (this.$refs.password.innerHTML = "密码强度：强！");
          this.$store.commit("passwordPowerful", powerful);
          if (powerful) {
            setTimeout(() => {
              this.$refs.password.innerHTML = null;
            }, 1000);
          }
        }
      } else {
        this.$refs.password.innerHTML = "密码长度6-12位！";
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
.login-password > span,
.login-user-input > span {
  font-size: 0.7rem;
  position: relative;
  top: -1.2rem;
  right: -1rem;
  margin-left: 8rem;
  color: red;
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

