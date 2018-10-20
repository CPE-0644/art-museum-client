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
          clearable>
        </el-input>
      </div>
      
      <div class="type-filter">
        <el-checkbox-group v-model="typeFilter">
          <el-checkbox label="Sculpture"></el-checkbox>
          <el-checkbox label="Statue"></el-checkbox>
          <el-checkbox label="Painting"></el-checkbox>
          <el-checkbox label="Other Types"></el-checkbox>
        </el-checkbox-group>
      </div>

      <el-button icon="el-icon-search" circle  
          v-on:click="searchArtwork"></el-button>
      
    </div>
    <div class="body-content">
      <artwork-list :artworks="filteredArtworks"></artwork-list>
    </div>
  </div>
</template>

// TODO: added artwork filter by [artist, artwork name, artwork type ]

<script>
import _ from 'lodash';
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
      artworks: [],
      typeFilter: ['Sculpture', 'Statue', 'Painting', 'Other Types']
    };
  },
  methods: {
    fetchArtworks() {
      return apiService.fetchArtworks().then(data => {
        this.artworks = data;
        this.filteredArtworks = data;
      });
    },
    searchArtwork() {
      const searchTitle = this.artworkSearch.toLowerCase();
      const results =
        searchTitle == ''
          ? this.artworks
          : _.filter(this.artworks, artwork => {
              const isShowSculpture =
                _.includes(this.typeFilter, 'Scultpure') &&
                artwork.style == 'sculpture';
              const isShowStatue =
                _.includes(this.typeFilter, 'Statue') &&
                artwork.style == 'statue';
              const isShowPainting =
                _.includes(this.typeFilter, 'Painting') &
                (artwork.style == 'painting');
              const isShowOther =
                _.includes(this.typeFilter, 'Other Types') &&
                artwork.style == 'other-art-object';
              const isShow =
                isShowSculpture ||
                isShowStatue ||
                isShowPainting ||
                isShowOther;
              const artworkTitle = artwork.title.toLowerCase();
              if (isShow) return artworkTitle.indexOf(searchTitle) != -1;
            });
      this.filteredArtworks = results;
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

body
  > div:nth-child(2)
  > section
  > main
  > div
  > div
  > div.artwork.serach-filter
  > div.search-bar
  > div
  > input {
  text-align: center;
}

.type-filter {
  margin: 20px;
}
</style>
