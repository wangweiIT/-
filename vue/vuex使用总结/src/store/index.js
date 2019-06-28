import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './store4login'
import moduleB from './moduleB'

Vue.use(Vuex)

//按照模块进行划分
const store = new Vuex.Store({
  modules: {
     moduleA,
     moduleB
  },
  state: {
    count: 1
  },
  getters: {
    getStateCount(state) {
      debugger
      return state.count + 1;
    }
  },
  mutations: {
    add(state, n=2) {
      debugger;
      state.count +=n;
    },
    sub(state, n=2){
      debugger;
      state.count -=n;
    }
  },
  actions: {
    addFun({commit}, n){ //对象结构，直接提取出 commit
      debugger;
      commit('add', n);
    },
    subFun(context, n){
      debugger;
      context.commit('sub', n);
    }
  }
})
export default store
