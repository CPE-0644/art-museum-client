<template>
  <div>
    <!-- <div class="artist-heading">
      <div class="artist-page-thumbnail"></div>
      <div class="center">ARTIST</div>
    </div> -->
     <h1>
      Artists
    </h1>

    <div class="artist search-bar">
      <el-input
        placeholder="Find your favourite Artist"
        v-model="artistSearch"
        clearable>
      </el-input>
    </div>

    <div class="artist-activitiy-button">
      <el-button icon="el-icon-search" circle @click="searchArtist"> </el-button>
      <el-button class="el-icon-plus" circle @click="createArtist" v-if="isAdmin()"></el-button>
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
import auth from '../utils/auth';
const apiService = new APIService();

export default {
  name: 'Artists',
  data() {
    return {
      artists: [],
      filteredArtists: [],
      artistSearch: this.$route.params.artistName || ''
    };
  },
  components: {
    ArtistList
  },
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    fetchArtists() {
      return apiService.fetchArtists().then(data => {
        this.artists = data;
        this.filteredArtists = data;
      });
    },
    createArtist() {
      this.$router.push({ path: 'artists/new' });
    },
    searchArtist() {
      const searchName = this.artistSearch.toLowerCase();
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

<style lang="scss">
.body-content {
  margin: 0 5vw;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(199, 199, 199);
}

.artist-activitiy-button {
  margin: 30px;
}

.artist-heading {
  margin: 20px;
  margin-bottom: 50px;

  .artist-page-thumbnail {
    background-image: url('http://localhost:3000/images/thumbnails/artist.jpg');
    width: 100%;
    height: 30vw;
    background-position: center;
    /* Make the background image cover the area of the <div>, and clip the excess */
    background-size: cover;
    border-radius: 5px;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8vw;
    color: white;
  }

  img {
    width: 100%;
    height: auto;
  }
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

.icon-search {
  margin: 10px;
}

.artist.search-bar {
  margin: 0 10vw;
}
</style>
