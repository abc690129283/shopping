<template>
  <div class="product-details">
    <div class="product-details-header">
      <router-link to="/list">
        <span><i class="iconfont" slot="icon">&#xe65b;</i></span>
      </router-link>
      <span style="padding-left:0.2rem">商品详情</span>
    </div>
    <div class="product-details-list" ref="wrapper">
      <div class="product-details-main">
        <img :src="products.image">
        <br>
        <span>{{products.productName}}</span>
        <span style="font-size:0.8rem">{{products.productText}}</span>
        <br>
        <span style="font-size:0.7rem;color:#aaa;">{{products.color}}</span>
        <span style="font-size:0.7rem;color:#aaa;">{{products.memory}}</span>
        <br>
        <span style="color:red">￥{{products.productPrice |PriceFilter}}</span>
        <span
          style="color:#aaa;font-size:0.8rem;text-decoration:line-through"
        >￥{{products.price | PriceFilter}}</span>
        <div class="cartBut">
          <div @click.stop="handleAddToCart(products.id)" size="small">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
const ERR_NO = 0;
export default {
  data() {
    return {
      // 拿到路由中的参数
      id: parseInt(this.$route.params.id),
      product: [],
      products: []
    };
  },
  computed: {},
  created() {
    this.getProducts();
  },
  filters: {
    PriceFilter: item => {
      return item.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    }
  },
  methods: {
    getProduct() {
      // 数组中的find ==> item.id找到与this.id相同的值 只要第一个元素 后面元素再相同也不会生效
      this.products = this.product.find(item => {
        return item.id === this.id;
      });
    },
    getProducts() {
      this.$axios.get("/api/list").then(res => {
        if (res.data.errno == ERR_NO) {
          this.product = res.data.data.product;
          this.getProduct();
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
              click: true
            });
          });
        }
      });
    },
    handleAddToCart(id) {
      this.$store.commit("addCart", id);
    }
  }
};
</script>
<style scoped>
.product-details {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  width: 100%;
}
.product-details-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  height: 2rem;
  line-height: 2rem;
  z-index: 3;
}
.product-details-header > span {
  font-size: 0.7rem;
  padding-left: 0.3rem;
  color: black;
}
.product-details-list {
  width: 100%;
  margin-top: 2rem;
  height: 22rem;
}
.product-details-main {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
}
.product-details-main >img{
  width:14rem;
  background-size: 100% 100%;
}
.product-details-main > p {
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


