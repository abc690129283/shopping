<template>
  <div class="goods">
    <div class="goods-header">
      <router-link to="/classify">
        <span>
          <i class="iconfont" slot="icon">&#xe65b;</i>
        </span>
      </router-link>
      <span style="padding-left:0.2rem">商品详情</span>
    </div>
    <div class="goods-details-list" ref="wrapper">
      <div class="goods-details-main">
        <img :src="goodsLists.image">
        <br>
        <span>{{goodsLists.goodsDetailsName}}</span>
        <span style="font-size:0.8rem">{{goodsLists.goodsDetailsText}}</span>
        <br>
        <span style="font-size:0.7rem;color:#aaa;">{{goodsLists.color}}</span>
        <span style="font-size:0.7rem;color:#aaa;">{{goodsLists.memory}}</span>
        <br>
        <span style="color:red">￥{{goodsLists.goodsDetailsPrice}}</span>
        <span style="color:#aaa;font-size:0.8rem;text-decoration:line-through">￥{{goodsLists.price}}</span>
        <div class="cartBut">
          <div @click.stop="handleAddToCart(goodsLists.id)" size="small">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.goods {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(250, 245, 245);
  width: 100%;
}
.goods-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
  z-index: 3;
}
.goods-header span {
  font-size: 0.7rem;
  padding-left: 0.3rem;
  color: black;
}

.goods-details-list {
  width: 100%;
  margin-top: 2rem;
  height: 22rem;
}
.goods-details-main {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
}
.goods-details-main > p {
  font-size: 1rem;
}
.cartBut {
  width: 100%;
  margin-top: 0.3rem;
}
.cartBut > div {
  margin-left: 3.4rem;
  font-size: 1rem;
  width: 9rem;
  height: 3rem;
  line-height: 3rem;
  background-color: aqua;
  border-radius: 1rem;
  color: #133;
}
</style>
<script>
import BScroll from "better-scroll";
const ERR_NO = 0;
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      goodsList: [],
      goodsLists: [],
      goodsImage: [],
      goods: []
    };
  },
  computed: {
 
  },
  created() {},
  mounted() {
    this.$axios.get("/api/goods").then(res => {
      if (res.data.errno == ERR_NO) {
        this.goodsList = res.data.data.goodsImg;
        this.goodsLists = this.goodsList.find(item => {
          return item.id === this.id;
        });
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          });
        });
      }
    });
  },
  methods: {
    handleAddToCart(id) {
      this.$store.commit("addCart", id);
    }
  }
};
</script>
