webpackJsonp([2],{"1QJ5":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("kBI2"),o={data:function(){return{value:"",listHeight:[],scrollY:0,goodsList:[]}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return this._followScroll(t),t}return 0},goodsListImage:function(){return this.goodsList.goodsImg}},mounted:function(){},methods:{_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.wrapper,{click:!0}),this.foodScroll=new i.a(this.$refs.wrappers,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){s.y<=0&&(t.scrollY=Math.abs(Math.round(s.y)))})},_followScroll:function(t){var s=this.$refs.menuList[t];this.menuScroll.scrollToElement(s,300,0,-100)},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodList[t];this.foodScroll.scrollToElement(e,300)}},_calculateHeight:function(){var t=this.$refs.foodList,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},created:function(){var t=this;this.$axios.get("/api/goods").then(function(s){0==s.data.errno&&(t.goodsList=s.data.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"classify"},[e("div",{staticClass:"classify-search"},[e("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),t._v(" "),e("div",{staticClass:"classify-screen"},[e("div",{ref:"wrapper",staticClass:"classify-screen-left"},[e("ul",t._l(t.goodsList.goodsClassify,function(s,i){return e("li",{key:s.id,ref:"menuList",refInFor:!0,class:{current:t.currentIndex===i},on:{click:function(s){return t.selectMenu(i,s)}}},[t._v(t._s(s.goodsName))])}),0)]),t._v(" "),e("div",{staticClass:"product"},[e("div",{ref:"wrappers",staticClass:"product-wrapper"},[e("div",{staticClass:"product-img"},t._l(t.goodsListImage,function(s){return e("div",{key:s.id,ref:"foodList",refInFor:!0,staticClass:"product-img"},[e("img",{attrs:{src:s.image1}}),t._v(" "),e("div",{staticClass:"product-phone"},[e("div",{staticClass:"product-phone-text"},[e("span",{staticStyle:{"font-size":"0.5rem",color:"#ddd","padding-right":"0.3rem"}},[t._v("—")]),t._v(" "),e("span",{staticStyle:{"font-size":"0.6rem",color:"darkslategrey"}},[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticStyle:{"font-size":"0.5rem",color:"#ddd","padding-left":"0.3rem"}},[t._v("—")])]),t._v(" "),t._l(s.goodsImage,function(i){return e("div",{key:i.id,staticClass:"product-phone-img"},[e("router-link",{attrs:{to:"/phone/"+s.id,tag:"div"}},[e("img",{attrs:{src:i.img}}),t._v(" "),e("span",[t._v(t._s(i.name))])])],1)})],2)])}),0)])])])])},staticRenderFns:[]};var n=e("VU/8")(o,r,!1,function(t){e("RyFQ")},"data-v-88827674",null);s.default=n.exports},RyFQ:function(t,s){}});
//# sourceMappingURL=2.ad49164fd04c099b216a.js.map