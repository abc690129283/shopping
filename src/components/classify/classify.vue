<template>
  <div class="classify">
    <div class="classify-search">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
    <div class="classify-screen">
      <div class="classify-screen-left" ref="wrapper">
        <ul>
          <li
            v-for="(item,index) in goodsList.goodsClassify"
            :key="item.id"
            ref="menuList"
            :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)"
          >{{item.goodsName}}</li>
        </ul>
      </div>
      <div class="product">
        <div class="product-wrapper" ref="wrappers">
          <div class="product-img">
            <div class="product-img" ref="foodList" v-for="item in goodsListImage" :key="item.id">
              <img :src="item.image1">
              <div class="product-phone">
                <div class="product-phone-text">
                  <span style="font-size:0.5rem;color:#ddd;padding-right:0.3rem;">—</span>
                  <span style="font-size:0.6rem;color:darkslategrey;">{{item.goodsName}}</span>
                  <span style="font-size:0.5rem;color:#ddd;padding-left:0.3rem;">—</span>
                </div>
                <div class="product-phone-img" v-for="items in item.goodsImage" :key="items.id">
                  <router-link :to="'/phone/'+item.id" tag="div">
                    <img :src="items.img">
                    <span>{{items.name}}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.classify {
  width: 100%;
}
.classify-search {
  width: 100%;
  height: 2.4rem;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #ddd;
}
/*------------------------------*/

.classify-screen {
  width: 100%;
}
.classify-screen-left {
  position: fixed;
  top: 2.4rem;
  left: 0;
  height: 23rem;
  width: 20%;
}
.classify-screen ul {
  width: 100%;
  background-color: #ddd;
}
.classify-screen ul li {
  color: darkslategrey;
  height: 4rem;
  line-height: 4rem;
  font-size: 0.6rem;
  display: block;
  text-align: center;
}
.classify-screen ul li.current {
  position: relative;
  z-index: 10;
  margin-top: 0.7rem;
  background: #fff;
  font-weight: 700;
}

/*-------------------------------*/
.product-wrapper {
  width: 80%;
  position: fixed;
  right: 0;
  top: 2.4rem;
  height: 23rem;
}
.product-img {
  width: 100%;
  float: left;
  margin-bottom: 1rem;
  margin-top:0.3rem;
}
.product-img > img {
  display: block;
  height: 7rem;
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
.product-phone-img > div> img {
  display: block;
  width: 100%;
  padding-left:0.5rem;
  height: 3.5rem;
  background-size: 100% 100%;
}
.product-phone-img > div> span {
  padding-top: 0.5rem;
  display: block;
  font-size: 0.3rem;
  text-align: center;
}
</style>

<script>
const ERR_NO = 0;
import BScroll from "better-scroll";
export default {
  data() {
    return {
      value: "",
      listHeight: [],
      scrollY: 0,
      goodsList: []
    };
  },
  computed: {
    currentIndex() {
      // 算出每个li 的高度
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]; // 拿到所有li的高度
        let height2 = this.listHeight[i + 1]; // 从第二个开始
        // this.scrollY = 0;
        // 如果不等于第一个 或者 Y偏移量大于等于li的总高度 与 小于第一个li的高度
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    },
    goodsListImage() {
      return this.goodsList.goodsImg;
    }
  },
  mounted() {
   
  },
  methods: {
    _initScroll() {
      // 左边
      this.menuScroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
      // 右边
      this.foodScroll = new BScroll(this.$refs.wrappers, {
        click: true,
        probeType: 3
      });
       // 判断滑动方向 li高亮
      this.foodScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _followScroll(index) {
      let menuList = this.$refs.menuList;
      let el = menuList[index];
      this.menuScroll.scrollToElement(el, 300, 0, -100);
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        //如果不存在这个属性 则为原生点击事件 不执行下面的函数
        return;
      }
      let foodList = this.$refs.foodList;
      // 点击拿到当前的节点
      let el = foodList[index];
      // 点击当前节点 跳到相应的内容
      this.foodScroll.scrollToElement(el, 300);
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList;
      let height = 0;
      this.listHeight.push(height);
      // 循环foodList下的dom结构 将每一个li的高度依次push到数组
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  created() {
    this.$axios.get("/api/goods").then(res => {
      if (res.data.errno == ERR_NO) {
        this.goodsList = res.data.data;
        this.$nextTick(() => {
          this._initScroll();
         this._calculateHeight();
        });
      }
    });
  }
};
</script>


