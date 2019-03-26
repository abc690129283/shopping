<template>
  <div class="phone">
    <div class="main-phone-list">
      <div class="main-phone-lists" v-for="item in products" :key="item.id">
        <router-link :to="'/phone/'+item.id" tag="div">
          <img :src="item.image">
          <div class="main-phone-text">
            <span style="display:block">{{item.productName}}</span>
            <span
              style="display:block;font-size:0.6rem;padding:0.2rem 0 0.2rem 0"
            >{{item.productText}}</span>
            <span style="color:red;">￥{{item.productPrice | PriceFilter}}起</span>
            <span
              style="text-decoration:line-through;font-size:0.3rem;color:slategrey"
            >￥{{item.price | PriceFilter}}</span>
            <div class="but">
              <mt-badge
                @click.native.stop="handleAddToCart(item.id)"
                size="small"
              >加入购物车</mt-badge>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  computed: {
    products() {
      return this.$store.state.dataList.product;
    }
  },
  filters: {
    PriceFilter: item => {
      return item.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    }
  },
  methods: {
    getProductList() {
      this.$store.dispatch("getDataList");
    },
    handleAddToCart(id) {
      this.userName = localStorage.getItem("userName");
      if (this.userName == null) {
        MessageBox("提示", "请先登录哦！");
      } else {
        this.$store.commit("addCart", id);
      }
      // let cartLength = this.$store.state.cartList.length;
      // localStorage.setItem("cartList",cartLength);
    }
  },
  mounted() {
    this.getProductList();
  }
};
</script>

<style scoped>
.phone {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.main-phone-list {
  width: 100%;
  float: left;
  margin-top: 0.6rem;
  position: relative;
}
.main-phone-lists {
  width: 50%;
  float: left;
  padding-top: 0.7rem;
}
.main-phone-lists img {
  display: block;
  width:100%;
  height:7rem;
}
.main-phone-text {
  padding-left: 1rem;
  font-size: 0.7rem;
  position: relative;
}

.but {
  position: absolute;
  top: 0.1rem;
  left: 3.9rem;
}
</style>

