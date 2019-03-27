<template>
  <div id="app">
    <mt-tabbar v-show="$route.meta.navShow"></mt-tabbar>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import mtTabbar from "./common/mt-tabbar/mt-tabbar.vue";
export default {
  components: {
    mtTabbar
  },
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  // 监听动画
  watch: {
    $route(to, from) {
      if (to.path == "/list") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  },

  mounted() {
    (function() {
      var newRem = function() {
        var html = document.documentElement;
        html.style.fontSize = html.getBoundingClientRect().width / 16 + "px";
      };
      window.addEventListener("resize", newRem, false);
      newRem();
    })();
  }
};
</script>

<style scoped>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
