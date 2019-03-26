<template>
  <div class="cart">
    <div class="cart-header">
      <span>购物车</span>
    </div>
    <div class="cart-list" ref="wrapper">
      <div class="cart-list-wrapper">
        <div class="cart-list-product" v-for="(item,index) in cartList" :key="item.id">
          <div class="cart-list-product-img">
            <img :src="productDictList[item.id].image">
          </div>
          <div class="cart-list-product-text">
            <span>{{productDictList[item.id].productName}}</span>
            <br>
            <span style="font-size:0.5rem;color:SlateGray;">{{productDictList[item.id].color}}</span>
            <span style="font-size:0.5rem;color:SlateGray;">{{productDictList[item.id].memory}}</span>
            <br>
            <span
              style="color:red;font-size:0.8rem"
            >￥{{productDictList[item.id].productPrice * item.count | PriceFilter}}</span>
            <span
              style="color:	#708090;font-size:0.2rem;text-decoration:line-through;"
            >￥{{productDictList[item.id].price |PriceFilter}}</span>
          </div>
          <div class="cart-list-product-but">
            <span @click="handleCount(index,-1)">-</span>
            <span>{{item.count}}</span>
            <span @click="handleCount(index,1)">+</span>
          </div>
          <div class="cart-control-delete">
            <span @click="handleDelete(index)">删除</span>
          </div>
        </div>
        <div class="cart-empty" v-if="!cartList.length">
          <i class="iconfont" slot="icon">&#xe604;</i>购物车为空！
        </div>
        <div class="cart-list-product-recommend">
          <span style="font-size:0.5rem;color:#ddd;padding-right:0.3rem;">—</span>
          <span style="font-size:0.6rem;color:darkslategrey;">为你推荐</span>
          <span style="font-size:0.5rem;color:#ddd;padding-left:0.3rem;">—</span>
        </div>
        <div class="cart-list-product-phone">
          <phone></phone>
        </div>
      </div>
    </div>
    <div class="cart-footer" v-if="cartList.length">
      <span style="padding-left:1rem;">
        共
        <span style="color:red;font-size:0.7rem">{{countAll}}</span>件商品
      </span>
      <span>
        应付金额
        <span style="color:red;font-size:0.7rem">￥{{costAlls |PriceFilter }}</span>
      </span>
      <span class="cart-control-order" @click="handleOrder">结算</span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import phone from "../phone/phone.vue";
import BScroll from "better-scroll";
const ERR_NO = 0;
export default {
  data() {
    return {
      productList: []
    };
  },
  components: {
    phone
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    productDictList() {
      const dict = {};
      this.productList.forEach(item => {
        dict[item.id] = item;
      });
      return dict;
    },
    costAlls() {
      let cost = 0;
      this.cartList.forEach(item => {
        cost += this.productDictList[item.id].productPrice * item.count;
      });
      return cost;
    },
    countAll() {
      let count = 0;
      this.cartList.forEach(item => {
        count += item.count;
      });
      return count;
    }
  },
  mounted() {
    this.$axios.get("/api/list").then(res => {
      if (res.data.errno == ERR_NO) {
        this.productList = res.data.data.product;
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          });
        });
      }
    });
  },
  methods: {
    // 加 减
    handleCount(index, count) {
      if (count < 0 && this.cartList[index].count === 1) {
        return;
      }
      this.$store.commit("editCartCount", {
        id: this.cartList[index].id,
        count: count
      });
    },
    // 删除
    handleDelete(index) {
      let idx = this.cartList[index].id;
      this.$store.commit("deleteCart", idx);
    },
    // 结算
    handleOrder() {
      if (this.costAll != 0) {
        this.$store.dispatch("emptyCart").then(() => {
          MessageBox("提示", "购物成功！");
          setTimeout(() => {
            window.location.href = "http://localhost:8080/cart";
          }, 1000);
        });
      }
    }
  },
  filters: {
    PriceFilter: item => {
      return item.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    }
  }
};
</script>

<style scoped>
.cart {
  width: 100%;
}
.cart-list {
  float: left;
  margin-top: 1.7rem;
  width: 100%;
  height: 22.6rem;
}
.cart-header {
  width: 100%;
  height: 1.7rem;
  line-height: 1.7rem;
  border-bottom: 0.01rem solid #ddd;
  text-align: center;
  z-index: 1;
  background-color: #fff;
  position: fixed;
}
.cart-header span {
  font-size: 0.7rem;
  color: darkslategrey;
}
.cart-list-wrapper {
  float: left;
  width: 100%;
}
.cart-list-product {
  width: 100%;
  height: 4rem;
  float: left;
  font-size: 0.7rem;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 0.01rem solid #ddd;
  position: relative;
  margin-top: 0.4rem;
}
.cart-list-product-img {
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.2rem;
  padding-left: 1rem;
  float: left;
}
.cart-list-product-img img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.cart-list-product-text {
  float: left;
  margin-top: 0.3rem;
  padding-left: 0.3rem;
}
.cart-list-product-but {
  margin-top: 2.5rem;
  position: absolute;
  right: 0.2rem;
}
.cart-list-product-phone {
  width: 100%;
  float: left;
}
.cart-list-product-recommend {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
}
.cart-list-product-but > span {
  border: 1px solid #ddd;
  padding: 0.1rem 0.4rem 0.1rem 0.4rem;
}
.cart-control-delete > span {
  position: absolute;
  right: 1rem;
}
.cart-footer {
  position: fixed;
  bottom: 2.75rem;
  background-color: #ddd;
  width: 100%;
  height: 2rem;
  z-index: 10;
  line-height: 2rem;
  font-size: 0.6rem;
}
.cart-control-order {
  position: absolute;
  right: 0;
  height: 100%;
  background-color: turquoise;
  height: 2rem;
  display: inline-block;
  width: 4rem;
  text-align: center;
  color: #fff;
  font-size: 0.7rem;
}
.cart-empty {
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  padding-top: 2rem;
}
.cart-empty > i {
  padding-right: 0.2rem;
  font-size: 1.2rem;
}
</style>

