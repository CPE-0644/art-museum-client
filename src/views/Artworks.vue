<template>
  <div>
    <h1>
      Artworks
    </h1>
    <div class="artwork serach-filter">
      <div class="search-bar">
      <el-input
          placeholder="Find your favourite Artwork"
          v-model="artworkSearch"
          v-on:change="searchArtwork"
          clearable>
        </el-input>
      </div>
    </div>
    <div class="type-choice">
      <a color="#42A5F5" @click="changeShowType('painting')">Painting</a>
      <a color="#42A5F5" @click="changeShowType('sculpture')">Sculpture</a>
      <a color="#42A5F5" @click="changeShowType('statue')">Statue</a>
      <a color="#42A5F5" @click="changeShowType('other')">Other</a>
    </div>
    <div class="body-content">
      <artwork-list :artworks="filteredArtworks"></artwork-list>
    </div>
  </div>
</template>

<script>
import { paintings } from '../assets/database/paintings.json';
import { sculptures } from '../assets/database/sculptures.json';
import { statues } from '../assets/database/statues.json';
import { other_types } from '../assets/database/other_type.json';
import ArtworkList from '../components/ArtworkList';
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  name: 'Artworks',
  data() {
    return {
      showType: 'painting',
      artworkSearch: '',
      filteredArtworks: [],
      artworks: []
    };
  },
  methods: {
    fetchArtworks() {
      return apiService.fetchArtworks().then(data => {
        this.artworks = data;
        this.filteredArtworks = data;
      });
    },
    searchArtwork(searchTitle) {
      searchTitle = searchTitle.toLowerCase();
      var results = _.filter(this.artworks, artwork => {
        const artworkTitle = artwork.title.toLowerCase();
        return artworkTitle.indexOf(searchTitle) != -1;
      });
      this.filteredArtworks = results;
    },

    changeShowType(type) {
      this.showType = type;

      switch (this.showType) {
        case 'painting':
          this.artworks = paintings;
          break;
        case 'sculpture':
          this.artworks = sculptures;
          break;
        case 'statue':
          this.artworks = statues;
          break;
        case 'other':
          this.artworks = other_types;
          break;
        default:
          break;
      }
    }
  },
  components: {
    ArtworkList
  },
  mounted() {
    this.fetchArtworks();
  }
};
</script>

<style lang="scss">
.artwork {
  .search-bar {
    margin: 0 10vw;
  }
}
</style>
