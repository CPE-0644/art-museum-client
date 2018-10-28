<template>
  <div class="artist-card">
    <el-collapse>
      <el-collapse-item :title="artist.name" :name="artist.id">
        <b-container>
          <b-row>
              <b-col class="artist-head">
                <div>
                  <img v-bind:src="src" class="image">
                </div>
                <h3> {{artist.name}} </h3>
              </b-col>
              <b-col class="artist-detail" cols="9">
                <h5> Information </h5>
                <span> {{artist.date_of_birth}} - {{artist.date_of_died}} </span>
                <div><h6> Country: </h6> {{artist.country}} </div>
                <div><h6> Epoch: </h6> {{artist.epoch}} </div>
                <div><h6> Style: </h6> {{artist.style}} </div>
                <div>{{artist.description}} </div>
              </b-col>
              <!-- <b-col class="artist-artwork">
                <div class="artist-artwork-list">
                  <h5> Artwork </h5> 
                  <div v-for="(artwork, index) in artworks" :key="index" class="artist-artwork-item" @click="goToArtwork(artwork.title)">
                    {{artwork.title}} 
                  </div>
                </div>
              </b-col> -->
          </b-row>
        </b-container>
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
      artworks: [],
      src: ''
    };
  },
  methods: {
    fetchArtworksByArtistId(id) {
      this.src = `http://localhost:3000/images/artists/${id}.jpg`;
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
  color: #909399;
  cursor: pointer;
}

.artist-artwork-item:hover {
  color: #303133;
}
.artist-card .image {
  min-width: 100px;
  max-width: 150px;
  max-height: 150px;
  margin: auto;
}

.artist-detail {
  text-align: left;
  margin: auto;
  vertical-align: middle;
  div {
    margin-top: 5px;
  }
}

h5 {
  text-decoration: underline;
}

.artist-artwork {
  text-align: center;
  margin: auto;
}

h6 {
  display: inline;
  font-weight: 100;
}
</style>
