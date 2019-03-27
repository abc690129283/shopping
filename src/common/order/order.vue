<template>
  <div class="order">
    <div class="order-header">
      <router-link to="/my">
        <span>
          <i class="iconfont" slot="icon">&#xe65b;</i>
        </span>
      </router-link>
      <span style="padding-left:0.2rem">我的订单</span>
    </div>
        <div class="container-main-list">
          <ul>
            <li @click="handleTab1" :class="{on:active=='1'}">全部</li>
            <li @click="handleTab2" :class="{on:active=='2'}">待付款</li>
            <li @click="handleTab3" :class="{on:active=='3'}">待收货</li>
            <li @click="handleTab4" :class="{on:active=='4'}">待评价</li>
          </ul>
        </div>
        <div class="containers" ref="wrapper">
        <div class="container-main-tab">
          <mt-tab-container  v-model="active">
            <mt-tab-container-item id="1">
              <div class="container-main-tab-icon">
                <i class="iconfont i" slot="icon">&#xe604;</i>
                <p>您还没有相关商品订单</p>
              </div>
              <div class="interval">
                <span>——————</span>
                <span>猜你喜欢</span>
                <span>——————</span>
              </div>
              <phone></phone>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div class="container-main-tab-icon">
                <i class="iconfont i" slot="icon">&#xe636;</i>
                <p>您还没有待付款订单</p>
              </div>
              <div class="interval">
                <span>——————</span>
                <span>猜你喜欢</span>
                <span>——————</span>
              </div>
              <phone></phone>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <div class="container-main-tab-icon">
                <i class="iconfont i" slot="icon">&#xe656;</i>
                <p>您还没有待收货订单</p>
              </div>
              <div class="interval">
                <span>——————</span>
                <span>猜你喜欢</span>
                <span>——————</span>
              </div>
              <phone></phone>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <div class="container-main-tab-icon">
                <i class="iconfont i" slot="icon">&#xe62c;</i>
                <p>您还没有待评价订单</p>
              </div>
              <div class="interval">
                <span>——————</span>
                <span>猜你喜欢</span>
                <span>——————</span>
              </div>
              <phone></phone>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
        </div>
      </div>
</template>
<script>
import phone from "../../components/phone/phone.vue";
import BScroll from "better-scroll";
export default {
  components: {
    phone
  },
  data() {
    return {
      active: "1"
    };
  },
  methods: {
    handleTab1() {
      this.active = "1";
    },
    handleTab2() {
      this.active = "2";
    },
    handleTab3() {
      this.active = "3";
    },
    handleTab4() {
      this.active = "4";
    }
  },
  mounted() {
    this.active = localStorage.getItem("orderPyment");
  },
  created(){
    this.$nextTick(()=>{
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    })
  }
};
</script>
<style  scoped>
.order {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  width: 100%;
}
.order-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: beige;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 0.01rem solid #ddd;
  z-index:2;
}
.order-header > span {
  font-size: 0.7rem;
  padding-left: 0.2rem;
}
.containers {
  width: 100%;
  height: 21rem;
  margin-top: 4rem;
}
.container-main-list {
  margin-top:2rem;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  z-index:2;
  position:fixed;
  background-color: #fff;
}
.container-main-list > ul {
  width: 100%;
  background-color: #fff;
}
.container-main-list > ul > li {
  float: left;
  width: 25%;
  text-align: center;
  color: #aaa;
  font-size: 0.6rem;
  border-bottom: 0.01rem solid #ddd;
}
.container-main-list > ul > li.on {
  border-bottom: 0.01rem solid red;
  color: red;
}
.container-main-tab {
  float: left;
  width: 100%;
  background-color:#fff;
}
.container-main-tab-icon {
  background-color: beige;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  color: #aaa;
}
.container-main-tab-icon > i {
  display: inline-block;
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.container-main-tab-icon > p {
  padding-bottom: 1rem;
}
.interval {
  font-size: 0.6rem;
  text-align: center;
  color: #aaa;
  background-color: beige;
  height: 1.5rem;
  line-height: 1.5rem;
}
</style>


