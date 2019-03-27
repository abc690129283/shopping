<template>
  <div class="list">
    <div class="search-header">
      <div class="search-fixed">
        <router-link to="/news">
          <div>
            <i class="iconfont search-fixed-left" slot="icon">&#xe623;</i>
          </div>
        </router-link>
        <div class="search-fixed-input">
          <i class="iconfont" slot="icon">&#xe602;</i>
          <input type="text">
        </div>
        <div class="search-fixed-right" @click="handleCamera">
          <i class="iconfont" slot="icon">&#xe649;</i>
        </div>
      </div>
      <div class="mark">
        <span>{{news}}</span>
      </div>
      <div class="search-list">
        <div class="search-list-text">
          <ul>
            <li
              v-for="item in list.lists"
              @click="handleTab(item.id)"
              :class="{'on':item.id==index}"
              :key="item.id"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <mt-tab-container swipeable v-model="index">
      <mt-tab-container-item id="1">
        <div class="search">
          <div class="wrapper" ref="wrapper">
            <div class="wrapper-main">
              <div class="wrapper-main-swiper">
                <mt-swipe :auto="2000" :speed="1000" :continuous="true">
                  <mt-swipe-item v-for="item in list.image" :key="item.id">
                    <img style="background-size:100% 100%;width:100%;height:100%" :src="item.img">
                  </mt-swipe-item>
                </mt-swipe>
              </div>
              <div class="wrapper-main-menu">
                <div class="wrapper-main-menus">
                  <ul>
                    <li>
                      <router-link to="/member" tag="div">
                        <mt-tab-item id="会员">
                          <i class="iconfont" slot="icon">&#xe610;</i>
                          <div class="a">会员</div>
                        </mt-tab-item>
                      </router-link>
                    </li>
                    <li @click="handleFunction">
                      <mt-tab-item id="功能">
                        <i class="iconfont" slot="icon">&#xe608;</i>
                        <div class="a">功能</div>
                      </mt-tab-item>
                    </li>
                    <li>
                      <mt-tab-item id="手机" @click.native="handleProduct">
                        <i class="iconfont" slot="icon">&#xe60a;</i>
                        <div class="a">手机</div>
                      </mt-tab-item>
                    </li>
                    <li>
                      <mt-tab-item id="电视" @click.native="handleProduct3" >
                        <i class="iconfont" slot="icon">&#xe639;</i>
                        <div class="a">电视</div>
                      </mt-tab-item>
                    </li>
                    <li>
                      <mt-tab-item id="二手" @click.native="handleProduct4">
                        <i class="iconfont" slot="icon">&#xe62a;</i>
                        <div class="a">二手</div>
                      </mt-tab-item>
                    </li>
                    <li @click="handleFunction"> 
                      <mt-tab-item id="精选">
                        <i class="iconfont" slot="icon">&#xe601;</i>
                        <div class="a">精选</div>
                      </mt-tab-item>
                    </li>
                    <li @click="handleFunction">
                      <mt-tab-item id="礼品卡">
                        <i class="iconfont" slot="icon">&#xe643;</i>
                        <div class="a">礼品卡</div>
                      </mt-tab-item>
                    </li>
                    <li @click="handleFunction">
                      <mt-tab-item id="以旧换新">
                        <i class="iconfont" slot="icon">&#xe607;</i>
                        <div class="a">以旧换新</div>
                      </mt-tab-item>
                    </li>
                    <li>
                      <mt-tab-item id="电脑热卖" @click.native="handleProduct2">
                        <i class="iconfont" slot="icon">&#xe699;</i>
                        <div class="a">电脑热卖</div>
                      </mt-tab-item>
                    </li>
                    <li @click="handleFunction">
                      <mt-tab-item id="服务" >
                        <i class="iconfont" slot="icon">&#xe696;</i>
                        <div class="a">服务</div>
                      </mt-tab-item>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="daily">
                <div class="daily-left">{{list.dailyName}}</div>
                <div class="daily-right" id="daily-right">
                  <ul id="daily-pic">
                    <li>{{list.daily}}</li>
                  </ul>
                </div>
              </div>
              <div class="main-phone">
                <div class="main-phone-s">
                  <img :src="list.dailyImg">
                </div>
              </div>
              <phone></phone>
            </div>
            <div class="goback"></div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="wrapper" ref="wrappera">
          <div class="wrapper-main">
            <phone></phone>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="wrapper" ref="wrapperb">
          <div class="wrapper-main">
            <phone></phone>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="wrapper" ref="wrapperc">
          <div class="wrapper-main">
            <phone></phone>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <div class="wrapper" ref="wrapperd">
          <div class="wrapper-main">
            <phone></phone>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
const ERR_NO = 0;
import { MessageBox } from "mint-ui";
import BScroll from "better-scroll";
import phone from "../phone/phone.vue";
export default {
  data() {
    return {
      index: "1",
      list: [],
      news: null
    };
  },
  components: {
    phone
  },
  computed: {},
  mounted() {},
  methods: {
    handleTab(id) {
      this.index = id;
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrappera, {
          click: true
        });
        this.scroll = new BScroll(this.$refs.wrapperb, {
          click: true
        });
        this.scroll = new BScroll(this.$refs.wrapperc, {
          click: true
        });
        this.scroll = new BScroll(this.$refs.wrapperd, {
          click: true
        });
      });
    },
    handleFunction() {
      MessageBox("提示", "更多功能敬请期待！");
    },
    handleCamera(){
     MessageBox("提示", "暂时无法使用！");
    },
    handleProduct() {
      this.index = "2";
      this.handleTab(this.index);
    },
    handleProduct2() {
      this.index = "3";
      this.handleTab(this.index);
    },
    handleProduct3() {
      this.index = "4";
      this.handleTab(this.index);
    },
    handleProduct4() {
      this.index = "5";
      this.handleTab(this.index);
    }
  },
  created() {
    this.$axios.get("/api/list").then(res => {
      if (res.data.errno == ERR_NO) {
        this.list = res.data.data;
        this.news = res.data.data.news.length;
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          });
        });
      }
    });
  }
};
</script>
<style scoped>
.list {
  width: 100%;
}
.search-header {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.mark {
  width: 0.7rem;
  height: 0.7rem;
  background-color: red;
  border-radius: 50%;
  position: relative;
  top: 0;
  left: 1rem;
  border: 1px solid red;
  line-height: 0.7rem;
}
.mark > span {
  top: 0;
  left: 0.15rem;
  position: absolute;
  color: #fff;
  font-size: 0.2rem;
}
.search-fixed {
  width: 100%;
  float: left;
  position: relative;
  overflow: hidden;
  background-color: blanchedalmond;
}
.search-fixed-left {
  float: left;
  padding: 0.1rem 0 0 0.32rem;
  font-size: 1.4rem;
  color: cadetblue;
}
.search-fixed-input {
  float: left;
  width: 12rem;
  padding-left: 0.4rem;
}
.search-fixed-input > i {
  position: absolute;
  color: slategrey;
  font-size: 0.8rem;
  top: 0.4rem;
  padding-left: 0.1rem;
  padding-top: 0.1rem;
}
.search-fixed-input > input {
  width: 11rem;
  height: 1.3rem;
  border: 0.01rem solid seashell;
  padding-left: 1rem;
  margin-top: 0.24rem;
}
.search-fixed-right {
  float: left;
  padding-top: 0.17rem;
  padding-left: 0.32rem;
}
.search-fixed-right > i {
  font-size: 1.3rem;
  color: cadetblue;
}
/*------------------------*/
.search-list {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: cadetblue;
  overflow: hidden;
  background-color: blanchedalmond;
}
.search-list-text {
  width: 100%;
}
.search-list-text ul {
  font-size: 0;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 1rem;
}
.search-list-text ul li {
  float: left;
  display: block;
  font-size: 0.6rem;
  width: 20%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.search-list-text ul li.on {
  background-color: #fff;
  color: red;
}

/*---------------------------*/

.search {
  width: 100%;
}

/*-----------------*/
.wrapper {
  width: 100%;
  height: 21rem;
  float: left;
  margin-top: 3.67rem;
  overflow: hidden;
}
.wrapper-main {
  width: 100%;
  float: left;
}
.wrapper-main-swiper {
  width: 100%;
  height: 7rem;
  background-color: tan;
}
.wrapper-main-menu {
  width: 100%;
  height: 5.8rem;

}
.wrapper-main-menus ul li {
  padding-top:0.3rem;
  width: 20%;
  float: left;
  text-align: center;
  height:3rem;
}
i {
  color: tan;
  font-size:1.1rem;
}
.a{
  font-size:0.5rem;
  padding-top:0.2rem;
}

/*------------------------------*/

.daily {
  width: 100%;
  display: flex;
  height: 1.6rem;
  line-height: 1.6rem;
  margin-top: 0.8rem;
  border-top: 0.01rem solid #ddd;
  border-bottom: 0.01rem solid #ddd;
}
.daily-left {
  width: 50%;
  font-size: 0.7rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: red;
  padding-left: 0.2rem;
  border-right: 0.01rem solid #ddd;
}
.daily-right {
  font-size: 0.6rem;
  padding-left: 0.2rem;
  overflow: hidden;
}
.daily-right ul li {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/*--------------------*/

.main-phone {
  margin-top: 0.02rem;
  width: 100%;
  height: 6.5rem;
  float: left;
}
.main-phone-s {
  width: 100%;
}
.main-phone-s img {
  width: 100%;
  height: 100%;
}

/*-------------------------------*/
.goback {
  position: fixed;
  bottom: 3.6rem;
  right: 0.6rem;
}
.goback i {
  color: aqua;
  font-size: 1.6rem;
}
</style>


