<template>
  <div>
    <h1>Artist</h1>
    <div class="body-content">
      <artist-list :artists="artists"></artist-list>
    </div>
  </div>
</template>

<script>
import ArtistList from '../components/ArtistList';
import { APIService } from '../utils/APIService.js';
const apiService = new APIService();

export default {
  name: 'Artists',
  data() {
    return {
      artists: []
    };
  },
  components: {
    ArtistList
  },
  methods: {
    getArtists() {
      apiService.getArtists().then(data => {
        this.artists = data;
      });
    }
  },
  mounted() {
    this.getArtists();
  }
};
</script>

<style>
</style>
