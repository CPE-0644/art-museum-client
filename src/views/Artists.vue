<template>
  <div>
    <h1>Artist</h1>
    <div class="search-box">

    </div>
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
    fetchArtists() {
      apiService.fetchArtists().then(data => {
        this.artists = data;
      });
    }
  },
  mounted() {
    this.fetchArtists();
  }
};
</script>

<style>
.body-content {
  margin-top: 30px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(199, 199, 199);
}
</style>
