import Vue from 'vue'
import App from './App'
import router from "./router";

import "@/assets/styles/main.scss";
import vuetify from './plugins/vuetify';

import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
