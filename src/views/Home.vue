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
        <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-layout>
    </v-parallax>
    </section>
    <section id="home-exhibition"></section>
    <section id="home-artwork"></section>
    <section id="home-artist"></section>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss">
#home-exhibition {
  height: 200px;
  background: #fff;
}

#home-artwork {
  height: 200px;
  background: #222;
}

#home-artist {
  height: 200px;
  background: #000;
}
</style>
