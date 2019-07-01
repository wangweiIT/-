// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import elementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import i18n from './language'

import router from './router'
import store from './store'
import Mock from './mock'

Mock.bootstrap()

Vue.use(elementUi)

Vue.config.productionTip = false

//全局路由拦截器
router.beforeEach(function(to, from, next) {
  debugger;
  //如果目标路由是返回登录页，则清空session信息
  //包括了在登录页的刷新动作
  if (to.path == '/login') {
    debugger;
    sessionStorage.removeItem('user');
  }

  let user = JSON.parse(sessionStorage.getItem('user'));
  //如果session中没有用户信息，则跳转到登录页面去
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: c => c(App)
})
