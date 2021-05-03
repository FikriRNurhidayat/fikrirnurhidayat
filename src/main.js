import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import AOS from './plugins/aos'
import './plugins/mapbox'

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
