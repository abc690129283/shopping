<template>
  <div class="personal-data">
    <div class="personal-data-header">
      <router-link to="/my">
        <span><i class="iconfont" slot="icon">&#xe65b;</i></span>
      </router-link>
      <span style="padding-left:0.2rem">个人资料</span>
    </div>
    <div class="personal-data-main">
      <ul>
        <li>
          <span style="position:relative;bottom:0.7rem;">头像</span>
          <img :src="userImage">
        </li>
        <li>
          <span>账号</span>
          <span style="right:1rem; position: absolute;">{{userName}}</span>
        </li>
        <li @click="handleLogOut">
          <span>账号注销</span>
          <span style="margin-left:11rem;">
            <i class="iconfont" slot="icon">&#xe60d;</i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      userName: null,
      userImage: null,
      password: null,
      member: null
    };
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
    this.password = localStorage.getItem("password");
    this.userImage = localStorage.getItem("userImage");
    this.member = localStorage.getItem("member");
  },
  methods: {
    handleLogOut() {
      MessageBox.confirm("确定要注销?").then(action => {
        this.userName = localStorage.removeItem("userName");
        this.userImage = localStorage.removeItem("userImage");
        this.password = localStorage.removeItem("password");
        this.member = localStorage.removeItem("member");
        localStorage.removeItem("orderPyment");
        window.location.href = "http://localhost:8080/my";
      });
    }
  }
};
</script>

<style scoped>
.personal-data {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  width: 100%;
}
.personal-data-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
}
.personal-data-header > span {
  font-size: 0.7rem;
  padding-left: 0.2rem;
}
.personal-data-main {
  margin-top: 3rem;
}
.personal-data-main > ul {
  width: 100%;
  height: 100%;
}
.personal-data-main > ul > li {
  font-size: 0.8rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #ddd;
  padding-left: 0.5rem;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
}
.personal-data-main > ul > li > img {
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  margin-left: 11rem;
  margin-top: 0.3rem;
}
</style>

