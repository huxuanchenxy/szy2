import Vue from 'vue'
import App from './App'
import VueMqtt from 'vue-mqtt'
import router from './router'

Vue.use(VueMqtt, 'ws://47.101.220.2:8083/mqtt', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
