import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

sync(store, router)

Vue.use(vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
