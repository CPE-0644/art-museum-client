<template>
  <div>
    <h1>
      Collections
    </h1>
    <div class="artwork serach-filter">
      <div class="search-bar">
        <el-input
          placeholder="Find your favourite Artwork"
          v-model="artworkSearch"
          clearable>
        </el-input>
      </div>
      
      <el-button icon="el-icon-search" circle  
          v-on:click="searchArtwork">
      </el-button>
      
    </div>

    <div class="body-content">
      <collection-list :collections="collections" ></collection-list>
    </div>

  </div>
</template>

// TODO: added artwork filter by [artist, artwork name, artwork type ]

<script>
import CollectionList from '../components/CollectionList';
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  name: 'Artworks',
  data() {
    return {
      collections: []
    };
  },
  methods: {
    fetchCollections() {
      return apiService.fetchCollections().then(data => {
        this.collections = data;
      });
    }
  },
  components: {
    CollectionList
  },
  mounted() {
    this.fetchCollections();
  }
};
</script>

<style lang="scss">
</style>
