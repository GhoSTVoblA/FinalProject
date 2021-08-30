import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/components/globals/Panel'

Vue.use(Vuetify)

Vue.config.productionTip = false

sync(store, router)

Vue.component('panel', Panel)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify: new Vuetify(),
  template: '<App/>'
}).$mount('#app')
