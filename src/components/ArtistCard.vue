<template>
  <div class="artist-card">
    <el-collapse>
      <el-collapse-item :title="artist.name" :name="artist.id">
        <div>
          <img src="../assets/artist.jpg" class="image">
        </div>
        <div>Name: {{artist.name}} Live:{{artist.date_of_birth}} - {{artist.date_of_died}}</div>
        <div>Born: {{artist.country}}</div>
        <div>Style: {{artist.style}}</div>
        <div class="artist-artwork-list">
          Artworks: 
          <span v-for="(artwork, index) in artworks" :key="index" class="artist-artwork-item" @click="goToArtwork(artwork.title)">
             {{artwork.title}} 
          </span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  props: ['artistDetail'],
  name: 'ArtworkCard',
  data() {
    return {
      artist: this.artistDetail,
      artworks: []
    };
  },
  methods: {
    fetchArtworksByArtistId(id) {
      return apiService.fetchArtworksByArtistId(id).then(data => {
        this.artworks = data;
      });
    },
    goToArtwork(artworkTitle) {
      this.$router.push({ path: `/artworks/${artworkTitle}` });
    }
  },
  watch: {
    artistDetail(newVal) {
      this.artist = newVal;
    }
  },
  mounted() {
    this.fetchArtworksByArtistId(this.artist.id);
  }
};
</script>

<style lang="scss">
.artist-artwork-item {
  cursor: pointer;
}

.artist-card .image {
  height: 50px;
  width: 50px;
  margin: auto;
}
</style>
