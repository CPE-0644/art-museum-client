import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';

Vue.config.productionTip = false;

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueCarousel from 'vue-carousel';

Vue.use(Vuetify);
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
