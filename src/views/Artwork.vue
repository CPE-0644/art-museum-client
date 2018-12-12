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
          clearable
        >
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

      <div class="artwork-activitiy-button">
        <el-button
          icon="el-icon-search"
          circle
          v-on:click="searchArtwork"
        > </el-button>
        <el-button
          class="el-icon-plus"
          v-if="isAdmin()"
          circle
          @click="createArtwork"
        ></el-button>
      </div>

    </div>
    <div class="body-content">
      <artwork-list :artworks="filteredArtworks"></artwork-list>
    </div>
  </div>
</template>

// TODO: added artwork filter by [artist, artwork name, artwork type ]

<script>
import _ from "lodash";
import ArtworkList from "../components/ArtworkList";
import { APIService } from "../utils/APIService.js";

import auth from "../utils/auth";

const apiService = new APIService();

export default {
  name: "Artworks",
  data() {
    return {
      artworkTitleParam: this.$route.params.artworkTitle,
      showType: "painting",
      artworkSearch: this.$route.params.artworkTitle || "",
      filteredArtworks: [],
      artworks: [],
      typeFilter: ["Sculpture", "Statue", "Painting", "Other Types"]
    };
  },
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    isLoggedIn() {
      return auth.isLoggedIn();
    },
    setInterestedArtworkTypes() {
      if (this.isLoggedIn()) {
        this.typeFilter = [localStorage.getItem("userInterested")];
        if (this.typeFilter.length == 0 || this.typeFilter[0] == null)
          this.typeFilter = ["Sculpture", "Statue", "Painting", "Other Types"];
      }
    },
    fetchArtworks() {
      return apiService.fetchArtworks().then(data => {
        this.artworks = data;
        this.filteredArtworks = data;
      });
    },
    createArtwork() {
      this.$router.push({ path: `artworks/new` });
    }
  },
  computed: {
    searchArtwork() {
      let searchTitle = this.artworkSearch.toLowerCase();
      if (this.artworkTitleParam != undefined)
        searchTitle = this.artworkTitleParam.toLowerCase();
      const results = _.filter(this.artworks, artwork => {
        const isShowSculpture =
          _.includes(this.typeFilter, "Sculpture") &&
          artwork.artwork_type == "sculpture";
        const isShowStatue =
          _.includes(this.typeFilter, "Statue") &&
          artwork.artwork_type == "statue";
        const isShowPainting =
          _.includes(this.typeFilter, "Painting") &
          (artwork.artwork_type == "painting");
        const isShowOther =
          _.includes(this.typeFilter, "Other Types") &&
          artwork.artwork_type == "other";
        const isShow =
          isShowSculpture || isShowStatue || isShowPainting || isShowOther;
        const artworkTitle = artwork.title.toLowerCase();
        if (isShow) return _.includes(artworkTitle, searchTitle);
      });
      this.filteredArtworks = results;
      return this.filteredArtworks;
    }
  },
  components: {
    ArtworkList
  },
  mounted() {
    this.setInterestedArtworkTypes();
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

.artwork-activitiy-button {
  margin-bottom: 30px;
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
