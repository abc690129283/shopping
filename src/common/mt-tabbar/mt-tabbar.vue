<template>
  <div id="app">
    <mt-tabbar fixed class="footer">
      <router-link to="/list" class="mint-tab-item a">
        <mt-tab-item id="首页">
          <i class="iconfont" slot="icon">&#xe606;</i>
          <div class="a">首页</div>
        </mt-tab-item>
      </router-link>
      <router-link to="/classify" class="mint-tab-item a">
        <mt-tab-item id="分类">
          <i class="iconfont" slot="icon">&#xe68c;</i>
          <div class="a">分类</div>
        </mt-tab-item>
      </router-link>
      <router-link to="/find" class="mint-tab-item a">
        <mt-tab-item id="发现">
          <i class="iconfont" slot="icon">&#xe63f;</i>
          <div class="a">发现</div>
        </mt-tab-item>
      </router-link>
      <router-link to="/cart" class="mint-tab-item a">
        <mt-tab-item id="购物车">
          <div class="sign" v-if="cartList.length">{{cartList.length}}</div>
          <i class="iconfont" slot="icon">&#xe604;</i>
          <div class="a">购物车</div>
        </mt-tab-item>
      </router-link>
      <router-link to="/my" class="mint-tab-item a">
        <mt-tab-item id="我的">
          <i class="iconfont" slot="icon">&#xe603;</i>
          <div class="a">我的</div>
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template>
<style scoped>
#app {
  position: relative;
}
.footer {
  height: 2.78rem;
}
.a {
  color: black;
  font-size: 0.7rem;
}
a {
  display: inline;
  font-size: 0.7rem;
}
.sign {
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  top: 0.4rem;
  right: 3.7rem;
  color: #fff;
  text-align: center;
  line-height: 0.7rme;
}
.router-link-active{
  background-color: #ddd;
}
</style>
<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>


