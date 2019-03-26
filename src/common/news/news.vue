<template>
  <div class="news">
    <div class="news-header">
       <router-link to="/list">
       <span style="font-size:1rem;color:#aaa;">
         <i class="iconfont" slot="icon">&#xe65b;</i>
         </span>
       </router-link>
      <span style="padding-left:0.2rem">消息通知</span>
    </div>
    <div class="news-main">
      <ul v-for="item in news" :key="item.id">
        <li>{{item.newsName}}</li>
        <li style="color:slategrey;">{{item.newsText}}</li>
        <li style="color:slategrey;">{{item.newsTime}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      news:[]
    }
  },
  mounted(){
    this.getNews();
  },
  methods:{
    getNews(){
     this.news = this.$store.state.dataList.news;
    }
  }
}
</script>

<style scoped>
.news {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  height: 100rem;
  width: 100%;
}
.news-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
}
.news-header > span {
  font-size: 0.7rem;
  padding-left: 0.2rem;
}
.news-main {
  margin-top: 1.7rem;
  width: 100%;
  height: 3.2rem;
}
.news-main > ul {
  float: left;
  width: 93%;
  height: 100%;
  background-color: #fff;
  margin-left: 0.5rem;
  margin-top: 1rem;
  border-radius:0.5rem;
}
.news-main > ul > li {
  font-size: 0.6rem;
  padding-left: 0.6rem;
  padding-top: 0.2rem;
}
</style>

