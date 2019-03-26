<template>
  <div class="find">
    <div class="find-header">
      <span>话题</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="content">
          <div class="content" v-for="item in hotFind.hostFindMain" :key="item.id">
          <div class="content-header-text">
            <i class="iconfont" slot="icon">&#xe601;</i>
            <span>{{item.title}}</span>
            <p>{{item.text}}</p>
          </div>
          <img :src="item.image">
          <div class="content-footer">
            <span>{{item.time | fromDate}}</span>
            <i class="iconfont" style="margin-left:7.5rem;" slot="icon">&#xe63f;</i>
            <span>{{item.times}}</span>
            <i style="margin-left:0.5rem;" class="iconfont" slot="icon">&#xe62c;</i>
            <span>{{item.comment}}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDates} from '../../common/js/date.js';
import BScroll from "better-scroll";
export default {
  computed:{
   hotFind(){
     return this.$store.state.hotFind;
   }
  },
  mounted() {
    this.$store.dispatch('getHotFind');
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  filters:{
    fromDate(time){
      let times = new Number(time);
      let date = new Date(times);
      return formatDates(date,"yyyy-MM-dd");
    }
  }
};
</script>
<style>
.find-header {
  width: 100%;
  height: 1.7rem;
  line-height: 1.7rem;
  border-bottom: 0.01rem solid #ddd;
  text-align: center;
  z-index: 1;
  background-color: #fff;
  position: fixed;
}
.find-header span {
  font-size: 0.7rem;
  color: darkslategrey;
}
.wrapper {
  float: left;
  width: 100%;
  height: 23.7rem;
  margin-top: 1.7rem;
}
.wrapper-content {
  float: left;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  width: 100%;
  float: left;
  margin-bottom: 0.5rem;
}
.content-header-text {
  width: 100%;
  margin-top: 0.5rem;
}
.content-header-text > i {
  color: red;
  font-size: 1.5rem;
  padding-left: 0.4rem;
}
.content-header-text > span {
  font-size: 0.75rem;
  font-weight: bold;
}
.content-header-text > p {
  font-size: 0.7rem;
  padding: 0.4rem 0 0.4rem 0.4rem;
}
.content > img {
  width: 95%;
  height: 100%;
  display: block;
  border-radius: 0.5rem;
  padding-left: 0.4rem;
  background-size: 100% 100%;
}
.content-footer {
  font-size: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 0.4rem;
  color: darkslategrey;
}
.content-footer > i {
  font-size: 0.6rem;
}
</style>




