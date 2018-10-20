<template>
  <div>
    <h1>Artist</h1>
    <div class="artist search-bar">
      <el-input
        placeholder="Find your favourite Artist"
        v-model="artistSearch"
        v-on:change="searchArtist"
        clearable>
      </el-input>
    </div>
    <div class="body-content">
      <artist-list :artists="filteredArtists"></artist-list>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import ArtistList from '../components/ArtistList';
import { APIService } from '../utils/APIService.js';
const apiService = new APIService();

export default {
  name: 'Artists',
  data() {
    return {
      artists: [],
      filteredArtists: [],
      artistSearch: ''
    };
  },
  components: {
    ArtistList
  },
  methods: {
    fetchArtists() {
      return apiService.fetchArtists().then(data => {
        this.artists = data;
        this.filteredArtists = data;
      });
    },
    searchArtist(searchName) {
      searchName = searchName.toLowerCase();
      let results = _.filter(this.artists, artist => {
        const artistName = artist.name.toLowerCase();
        return artistName.indexOf(searchName) != -1;
      });
      this.filteredArtists = results;
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
  box-shadow: 0px 1px 3px rgb(199, 199, 199);
}

body
  > div:nth-child(2)
  > section
  > main
  > div
  > div
  > div.artist.search-bar
  > div
  > input {
  text-align: center;
}

.artist.search-bar {
  margin: 0 10vw;
}
</style>
