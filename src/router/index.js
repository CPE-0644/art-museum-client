import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/Home.vue';
import Exhibition from '@/views/Exhibition.vue';
import Artwork from '@/views/Artwork.vue';
import Artist from '@/views/Artist.vue';
import Collection from '@/views/Collection.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';

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
      component: Exhibition
    },
    {
      path: '/artworks',
      name: 'Artworks',
      component: Artwork
    },
    {
      path: '/artworks/:artworkTitle',
      name: 'Artworks',
      component: Artwork
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artist
    },
    {
      path: '/artists/:artistName',
      name: 'Artists',
      component: Artist
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collection
    },
    {
      path: '/register',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    }
  ]
});
