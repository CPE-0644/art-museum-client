<template>
  <div id="home">
    <section id="title">
      <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Tusave De Museum</h1>
        <h4 class="subheading">Find your interested!</h4>
      </v-layout>
    </v-parallax>
    </section>
    <section id="home-exhibition">
      <h2>
        Exhibition  
      </h2> 
      <carousel>
        <slide v-for="(exhibition, index) in exhibitions" :key="index">{{exhibition}}</slide>
      </carousel>
      <router-link to="/exhibitions">see more..</router-link>
    </section>
    <section id="home-artwork">
      <h2>
        Artwork
      </h2>
      <carousel>
        <slide  v-for="(artwork, index) in artworks" :key="index">{{artwork}}</slide>
      </carousel>
      <router-link to="/artworks">see more..</router-link>
      </section>
    <section id="home-artist">
      <h2>Artist</h2>
      <carousel>
        <slide v-for="(artist, index) in artists" :key="index">{{artist}}</slide>
      </carousel>
      <router-link to="/artists">see more..</router-link>
      </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  data() {
    return {
      exhibitions: [1, 2, 3, 4],
      artworks: [1, 2, 3, 4],
      artists: [1, 2, 3, 4]
    };
  },

  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss">
#home-exhibition {
  height: 200px;
  background: #fff;
}

#home-artwork {
  height: 200px;
  background: #fff;
}

#home-artist {
  height: 200px;
  background: #fff;
}
</style>
