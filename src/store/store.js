import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
const ERR_NO = 0;
const store = new Vuex.Store({
  state: {
    dataList: [
    ],
    hotFind: [],
    cartList: [],
    userNameVerify: [],
    passwordWeak: [],
    passwordMiddle: [],
    passwordPowerful: [],
    myList:[]
  },
  getters: {
  },
  mutations: {
    setDataList(state, data) {
      state.dataList = data;
    },
    setHotFind(state, data) {
      state.hotFind = data;
    },
    addCart(state, id) {
      // 判断购物车是否有值 没有则加1 有则数量加1
      const isAdded = state.cartList.find(item => item.id === id);
      if (isAdded) {
        isAdded.count++;
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    userNameVerify(state, data) {
      state.userNameVerify = data;
    },
    passwordWeak(state, data) {
      state.passwordWeak = data;
    },
    passwordMiddle(state, data) {
      state.passwordMiddle = data;
    },
    passwordPowerful(state, data) {
      state.passwordPowerful = data;
    },
    openMember(state, data) {
    },    // 修改商品数量
    editCartCount(state, payload) {
      const product = state.cartList.find(item => item.id === payload.id);
      product.count += payload.count;
    }, // 删除
    deleteCart(state,id){
      const index = state.cartList.findIndex(item=>item.id===id);
      state.cartList.splice(index,1);
    },
    // 清空购物车
    emptyCart(state){
      state.cartList = [];
    },
    // 请求mylist数据
    myList(state,data){
      state.myList = data;
    }
  },

  actions: {
    getDataList(context) {
      // 异步请求数据
      return new Promise((resolve, reject) => {
        axios.get('/api/list').then(res => {
          if (res.data.errno == ERR_NO) {
            context.commit('setDataList', res.data.data);
            resolve();
          }
        })
      })
    },
    getHotFind(context) {
      return new Promise((resolve, reject) => {
        axios.get('/api/hotfind').then(res => {
          if (res.data.errno == ERR_NO) {
            context.commit('setHotFind', res.data.data);
            resolve();
          }
        })
      })
    },
    buy(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("openMember");
          resolve();
        }, 500)
      })
    },
    emptyCart(context){
       return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            context.commit("emptyCart");
            resolve();
         },500)
       })
    },
    myList(context){
      return new Promise((resolve,reject)=>{
        axios.get("/api/my").then(res=>{
          if(res.data.errno==ERR_NO){
            context.commit("myList",res.data.data);
            resolve();
          }
        })
      })
    }
  }
});
export default store;