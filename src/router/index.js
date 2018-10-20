import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/Home.vue';
import Exhibitions from '@/views/Exhibitions.vue';
import Artworks from '@/views/Artworks.vue';
import Artists from '@/views/Artists.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exhibitions',
      name: 'Exhibitions',
      component: Exhibitions
    },
    {
      path: '/artworks',
      name: 'Artworks',
      component: Artworks
    },
    {
      path: '/artworks/:artworkTitle',
      name: 'Artworks',
      component: Artworks
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/artists/:artistName',
      name: 'Artists',
      component: Artists
    }
  ]
});
