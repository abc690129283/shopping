<template>
  <div class="function-data">
    <div class="function-data-header">
      <router-link to="/my">
        <span><i class="iconfont" slot="icon">&#xe65b;</i></span>
      </router-link>
      <span style="padding-left:0.2rem">功能</span>
    </div>
    <div class="personal-data-main">
      <ul>
        <li @click="handleLogOut">
          <span>账号注销</span>
          <span style="margin-left:11.3rem;"><i class="iconfont" slot="icon">&#xe60d;</i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  mounted() {},
  methods: {
    handleLogOut() {
      MessageBox.confirm("确定要注销?").then(action => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userImage");
        localStorage.removeItem("password");
        localStorage.removeItem("member");
        localStorage.removeItem("orderPyment");
        window.location.href = "http://localhost:8080/my";
      });
    }
  }
};
</script>

<style scoped>
.function-data {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  width: 100%;
}
.function-data-header{
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
  font-size:0.8rem;
  border-bottom:0.01rem solid #ddd;
}
.personal-data-header>span {
  font-size: 0.7rem;
  padding-left: 0.2rem;
}
.personal-data-main {
  margin-top:2rem;
}
.personal-data-main > ul {
  width: 100%;
  height: 100%;
}
.personal-data-main > ul > li {
  font-size: 0.7rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #ddd;
  padding-left: 0.5rem;
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
}
</style>

