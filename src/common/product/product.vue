<template>
  <div class="product">
    <div class="product-wrapper" ref="wrappers">
      <div class="product-img">
        <div class="product-img" v-for="item in goodsListImage" :key="item.id">
          <img :src="item.image">
          <div class="product-phone">
            <div class="product-phone-text">
              <span style="font-size:0.5rem;color:#ddd;padding-right:0.3rem;">—</span>
              <span style="font-size:0.6rem;color:darkslategrey;">{{item.goodsName}}</span>
              <span style="font-size:0.5rem;color:#ddd;padding-left:0.3rem;">—</span>
            </div>
            <div class="product-phone-img" v-for="items in item.img" :key="items.id">
              <img :src="items.image1">
              <span>{{items.goodsName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-wrapper {
  width: 80%;
  position: fixed;
  right: 0;
  top: 2.4rem;
  height: 21rem;
}
.product-img {
  width: 100%;
  float: left;
  margin-bottom:1rem;
}
.product-img > img {
  display: block;
  height: 5rem;
  width: 100%;
  background-size: 100% 100%;
}
.product-phone {
  margin-top: 0.5rem;
}
.product-phone-text {
  text-align: center;
  margin-top: 0.7rem;
}
.product-phone-img {
  width: 33.33%;
  margin-top: 0.5rem;
  float: left;
  color: darkslategrey;
}
.product-phone-img > img {
  display: block;
  width: 100%;
  height: 3.5rem;
  background-size: 100% 100%;
}
.product-phone-img > span {
  padding-top: 0.5rem;
  display: block;
  font-size: 0.3rem;
  text-align: center;
}
</style>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      index: null
    };
  },
  computed: {
    goodsListImage() {
      return this.$store.getters.filterGoodsImg;
    }
  },
  mounted() {
    this.index = localStorage.getItem("active");
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrappers, {
        click: true
      });
    });
  },
  methods: {}
};
</script>



