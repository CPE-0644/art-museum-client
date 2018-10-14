import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Exhibition = {
  template: <div>Exhibition</div>
};

const Artwork = {
  template: <div>Artwork</div>
};

const Artist = {
  template: <div>Artist</div>
};

import Home from '../views/Home.vue';

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/exhibitions',
      component: Exhibition
    },
    {
      path: '/artworks',
      component: Artwork
    },
    {
      path: '/artists',
      component: Artist
    }
  ]
});
