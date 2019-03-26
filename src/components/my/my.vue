<template>
  <div class="my">
    <div class="my-header">
      <div class="my-header-logIn" v-if="userName==null">
        <p>
          <i class="iconfont" slot="icon">&#xe603;</i>
        </p>
        <router-link to="/login" tag="span">
          <span>注册</span>
        </router-link>
        <router-link
          to="/register"
          tag="a"
          style="font-size:0.8rem;color:slategrey;  border-bottom:0.01rem solid slategrey;"
        >
          <span>/登录</span>
        </router-link>
      </div>
      <div class="my-header-logIn" v-else>
        <router-link to="/personaldata" tag="p">
          <p>
            <img :src="userImage">
          </p>
        </router-link>
        <span v-if="member" style="border:none;color:darkorange">
          <i class="iconfont" slot="icon">&#xe600;</i>
        </span>
        <span style="border:none">{{userName}}</span>
      </div>
    </div>
    <div class="my-main" ref="wrapper">
      <div class="my-main-list">
        <div class="my-main-order">
          <p>我的订单</p>
          <p style="padding-left:9.6rem;" @click="handleOrder">
            全部订单
            <i class="iconfont" slot="icon">&#xe60d;</i>
          </p>
        </div>
        <div class="my-list">
          <mt-tab-item @click.native="handlePyment" id="待付款">
            <i class="iconfont i" slot="icon">&#xe636;</i>
            <div class="a">待付款</div>
          </mt-tab-item>
          <mt-tab-item @click.native="handleDelivery" id="待收货">
            <i class="iconfont i" slot="icon">&#xe656;</i>
            <div class="a">待收货</div>
          </mt-tab-item>
          <mt-tab-item @click.native="handleAppraise" id="待评价">
            <i class="iconfont i" slot="icon">&#xe62c;</i>
            <div class="a">待评价</div>
          </mt-tab-item>
          <mt-tab-item @click.native="handleRepair" id="退换修">
            <i class="iconfont i" slot="icon">&#xe609;</i>
            <div class="a">退换修</div>
          </mt-tab-item>
        </div>
        <div class="my-interval"></div>
        <div class="my-lists">
          <mt-tab-item id="优惠券" @click.native="handleList">
            <span style="font-size:1rem;">0</span>
            <div class="a" style="padding-top:0.4rem">优惠券</div>
          </mt-tab-item>
          <mt-tab-item id="最高额度" @click.native="handleList">
            <span style="font-size:1rem">
              20
              <span style="font-size:0.5rem">万</span>
            </span>
            <div class="a" style="padding-top:0.4rem">最高额度</div>
          </mt-tab-item>
          <mt-tab-item id="礼品卡" @click.native="handleList">
            <span style="font-size:1rem">0</span>
            <div class="a" style="padding-top:0.4rem">礼品卡</div>
          </mt-tab-item>
          <mt-tab-item id="我的钱包" @click.native="handleList">
            <i class="iconfont i" slot="icon">&#xe643;</i>
            <div class="a">我的钱包</div>
          </mt-tab-item>
        </div>
        <div class="my-interval"></div>
        <div class="my-main-swiper">
          <mt-swipe :auto="2000" :speed="1000">
            <mt-swipe-item v-for="item in myImage" :key="item.id">
              <img :src="item.image">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="my-interval"></div>
        <div class="my-main-set">
          <ul>
            <li>
              <i class="iconfont" slot="icon">&#xe600;</i>
              <router-link to="/member" tag="div">
                <div class="my-set">
                  <span>我的会员</span>
                  <span style="padding-left:9.6rem;">
                    <i class="iconfont is" slot="icon">&#xe60d;</i>
                  </span>
                </div>
              </router-link>
            </li>
            <li>
              <i class="iconfont" slot="icon">&#xe608;</i>
              <div class="my-set" @click="handleFunction">
                <span>功能</span>
                <span style="padding-left:11rem;">
                  <i class="iconfont is" slot="icon">&#xe60d;</i>
                </span>
              </div>
            </li>
            <li>
              <i class="iconfont" slot="icon">&#xe612;</i>
              <div @click="handleSet" class="my-set">
                <span>设置</span>
                <span style="padding-left:11rem;">
                 <i class="iconfont is" slot="icon">&#xe60d;</i>
                </span>
              </div>
            </li>
            <li>
              <i class="iconfont" slot="icon">&#xe696;</i>
              <div @click="handleServe" class="my-set">
                <span>服务</span>
                <span style="padding-left:11rem;">
                <i class="iconfont is" slot="icon">&#xe60d;</i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.my-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  line-height: 4rem;
  background-color: blanchedalmond;
  z-index: 1;
}
.my-header-logIn {
  width: 100%;
}
.my-header-logIn > p {
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  float: left;
  width: 2.1rem;
  height: 2.1rem;
  line-height: 2.2rem;
  border: 1px solid slategrey;
  border-radius: 50%;
  text-align: center;
}
.my-header-logIn > p > i {
  font-size: 1.2rem;
}
.my-header-logIn > p > p > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: 100% 100%;
}
.my-header-logIn > span {
  font-size: 0.8rem;
  border-bottom: 0.01rem solid slategrey;
  margin-left: 0.5rem;
  color: slategrey;
}
.my-main {
  width: 100%;
  margin-top: 4rem;
  height: 19.5rem;
  float: left;
}
.my-main-list {
  width: 100%;
  float: left;
}
.my-main-order {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  color: slategrey;
  border-bottom: 0.01rem solid #ddd;
}
.my-main-order > p {
  height: 100%;
  padding-left: 0.7rem;
  float: left;
  font-size: 0.5rem;
}
.my-main-order > p > i {
  font-size: 0.5rem;
}
.my-list {
  column-count: 4;
  text-align: center;
  height:2.68rem;
}
.a {
  color: black;
  font-size: 0.6rem;
  display: block;
}
.i {
  font-size: 1rem;
}
.is{
  font-size:0.7rem;
}
.my-interval {
  width: 100%;
  height: 0.3rem;
  float: left;
  background-color: rgb(244, 245, 246);
}
.my-lists {
  width: 100%;
  float: left;
  column-count: 4;
  text-align: center;
}

.my-main-swiper {
  width: 100%;
  float: left;
  height: 5rem;
}
.my-main-swiper img {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.my-main-set {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  margin-top: 0.5rem;
}
.my-main-set > ul > li > i {
  float: left;
  font-size: 1.2rem;
  display: block;
  padding-left: 0.5rem;
}
.my-set {
  margin-left: 0.6rem;
  font-size: 0.7rem;
  float: left;
  border-bottom: 0.01rem solid #ddd;
}
</style>

<script>
import { MessageBox } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      userName: null,
      userImage: null,
      password: null,
      member: null,
      active: "1"
    };
  },
  computed: {
    myImage() {
      return this.$store.state.myList.myImage;
    }
  },
  mounted() {
    this.$store.dispatch("myList");
    this.userName = localStorage.getItem("userName");
    this.password = localStorage.getItem("password");
    this.userImage = localStorage.getItem("userImage");
    this.member = localStorage.getItem("member");
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  methods: {
    handleOrder() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        localStorage.setItem("orderPyment", "1");
        window.location.href = "http://localhost:8080/order";
      }
    },
    handleRepair() {
      MessageBox("提示", "敬请期待！");
    },
    handlePyment() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        localStorage.setItem("orderPyment", "2");
        window.location.href = "http://localhost:8080/order";
      }
    },
    handleDelivery() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        localStorage.setItem("orderPyment", "3");
        window.location.href = "http://localhost:8080/order";
      }
    },
    handleAppraise() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        localStorage.setItem("orderPyment", "4");
        window.location.href = "http://localhost:8080/order";
      }
    },
    handleFunction() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        window.location.href = "http://localhost:8080/function";
      }
    },
    handleSet() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        MessageBox("提示", "敬请期待！");
      }
    },
    handleServe() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        MessageBox("提示", "敬请期待！");
      }
    },
    handleList() {
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        MessageBox("提示", "敬请期待！");
      }
    }
  }
};
</script>

