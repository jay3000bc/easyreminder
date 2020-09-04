import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCarousel from 'vue-carousel';
import axios from 'axios';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

Vue.use(VueCarousel);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8000/api';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
