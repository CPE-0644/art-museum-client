<template>
  <div id="home">
    <section id="title" class="inner-section">
      <div class="text-content">
        <h1 class="heading">JustAMuseum</h1>
        <h4 class="subheading">Find your interested!</h4>
      </div>
    </section>
    <section id="section-exhibition" class="inner-section">
      <h2>
        Exhibition  
      </h2> 
      <carousel :items="sampleExhibitions"></carousel>
      <router-link to="/exhibitions">
        <i class="el-icon-more"></i>
      </router-link>
    </section>
    <section id="section-artwork" class="inner-section">
      <h2>
        Artwork
      </h2>
      <carousel :items="sampleArtworks"></carousel>
      <router-link to="/artworks">
        <i class="el-icon-more"></i>
      </router-link>
    </section>
    <section id="section-artist">
      <h2>Artist</h2>
      <carousel :items="sampleArtists"></carousel>
      <router-link to="/artists">
        <i class="el-icon-more"></i>
      </router-link>
    </section>
  </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';
import Carousel from '../components/Carousel';

const apiService = new APIService();

export default {
  name: 'Home',
  data() {
    return {
      sampleExhibitions: [],
      sampleArtworks: [],
      sampleArtists: []
    };
  },
  components: {
    Carousel
  },
  methods: {
    fetchSampleData() {
      // return apiService.fetchArtists().then(data => {
      //   sampleArtists: data;
      //   debugger;
      // });
      // apiService.fetchExhibitions().then(data => {
      //   sampleExhibitions: data.slice(0, 4);
      // });
      // apiService.fetchArtworks().then(data => {
      //   sampleArtworks: data.slice(0, 4);
      // });
    }
  },
  mounted() {
    this.fetchSampleData();
  }
};
</script>

<style lang="scss">
.heading {
  font-size: 2.5em;
  font-weight: 400;
}
.subheading {
  font-size: 1.5em;
  font-weight: 150;
}
.text-content {
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
#title {
  background-color: #f5f6f7;
  padding: 100px;
}
section.inner-section {
  margin-top: 30px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(199, 199, 199);

  i {
    text-align: right;
    color: #606266;
    font-size: 24px;
    font-weight: 200;
  }
}
</style>
