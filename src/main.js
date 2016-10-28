import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(Element)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
