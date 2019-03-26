<template>
  <div class="member">
    <div class="member-header">
      <router-link to="/my">
        <span><i class="iconfont" slot="icon">&#xe65b;</i></span>
      </router-link>
      <span style="padding-left:0.2rem">我的会员</span>
    </div>
    <div class="member-wrapper">
      <div class="member-main">
        <div class="member-nav">
          <span style="font-size:1.5rem;">会员中心</span>
          <span style="font-size:0.5rem;">每月100元优惠券随心领</span>
          <div
            style="display:flexd;color:#fff;font-size:0.5rem;  text-align: center;padding-top:1rem;"
          >
            <span>
              连续包月
              <span style="font-size:1rem;">￥9.9/月</span>
            </span>
            <span style="  text-decoration: line-through;">￥19.9元/月</span>
          </div>
        </div>
      </div>
    </div>
    <div @click="handleMember" class="member-footer" v-if="!member">立即开通会员</div>
    <div @click="handleMember" class="member-footer" v-else>会员特权</div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      userName: null,
      password: null,
      member:null
    };
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
    this.password = localStorage.getItem("password");
    this.member = localStorage.getItem("member");
  },
  methods: {
    handleMember() {
      if (this.member) {
        MessageBox.alert("更多特权敬请期待！").then(action => {});
      } else {
        if (this.userName && this.password) {
          this.$store.dispatch("buy").then(() => {
            MessageBox.alert("购买成功").then(action => {
              localStorage.setItem("member", 600);
              window.location.href = "http://localhost:8080/my";
            });
          });
        } else {
          MessageBox.alert("请先登录哦").then(action => {
            window.location.href = "http://localhost:8080/my";
          });
        }
      }
    }
  }
};
</script>
<style scoped>
.member {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  width: 100%;
}
.member-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
}
.member-header > span {
  font-size: 0.7rem;
  padding-left: 0.2rem;
}
.member-wrapper {
  width: 100%;
  margin-top: 2rem;
  height: 20rem;
}
.member-main {
  width: 100%;
}
.member-nav {
  background-color: darkorange;
  height: 9rem;
  padding-top: 1rem;
}
.member-nav > span {
  display: block;
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
}
.member-footer {
  width: 100%;
  height: 2.7rem;
  background-color: darkorange;
  position: fixed;
  bottom: 0;
  z-index: 100;
  line-height: 2.7rem;
  text-align: center;
  color: #fff;
}
</style>


