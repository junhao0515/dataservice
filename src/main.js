// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入全局的自定义样式表
import ElementUI from 'element-ui'
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
