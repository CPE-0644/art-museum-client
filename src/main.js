import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';

Vue.config.productionTip = false;

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueCarousel from 'vue-carousel';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
