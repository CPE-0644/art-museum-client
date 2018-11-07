<template>
  <div class="exhibition-box">
    <el-card shadow="hover">
      <div class="exhibition-edit-delete" v-if="isAdmin()">
          <i class="el-icon-edit black" @click="editExhibition(exhibition.id)"></i>
          <i class="el-icon-delete red" @click="deleteExhibition(exhibition.id)"></i>
        </div>
      <b-row >
        <b-col cols="3">
          <div class="exhibition-image">
            <img v-bind:src="src" class="image">
          </div>
        </b-col>
        <b-col>
          <div class="exhibition-detail">
            <h1 class="exhibtion-name">{{exhibition.name}}</h1>
            <h5 class="exhibition-time"><i class="material-icons"> event </i>{{ exhibition.start_date }} - {{exhibition.end_date}}</h5>
            <div class="exhibition-display-list"> 
              <h6>
                Sample Artworks: 
              </h6>
                <el-card shadow="never">
                  <span class="exhibition-display-item" v-for="(artwork, index) in artworks" :key="index" @click="goToArtwork(artwork.title)">
                      <img v-bind:src='artwork.src' :title="artwork.title"/>
                  </span>
                </el-card>
            </div>
            <div class="exhibition-action">
              <a class="exhibition-users">{{exhibition.supported}} seats left</a>
              <el-button type="primary" size="small" round>JOIN NOW</el-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </el-card>
  </div>
</template>

<script>
import _ from 'lodash';

import { APIService } from '../utils/APIService.js';
import { IMG_URL } from '../utils/url.js';
import auth from '../utils/auth';

const apiService = new APIService();

export default {
  props: ['exhibitionDetail'],
  name: 'ExhibitionBox',
  data() {
    return {
      exhibition: this.exhibitionDetail,
      artworks: []
    };
  },
  watch: {
    exhibitionDetail(newVal) {
      this.exhibition = newVal;
    }
  },
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    fetchArtworksByExhibitionId(id) {
      this.src = `${IMG_URL}/exhibitions/${id}.jpg`;
      return apiService.fetchArtworksByExhibitionId(id).then(data => {
        this.artworks = data;

        this.artworks = _.map(this.artworks, artwork => {
          return {
            title: artwork.title,
            src: `${IMG_URL}/artworks/${artwork.id}.jpg`
          };
        });
      });
    },
    goToArtwork(artworkTitle) {
      this.$router.push({ path: `/artworks/${artworkTitle}` });
    },
    editExhibition(id) {
      this.$router.push({ path: `exhibitions/${id}/edit` });
    },
    deleteExhibition(id) {
      apiService
        .deleteArtwork(id)
        .then(res => this.$router.push({ path: 'exhibitions' }));
    }
  },
  mounted() {
    this.fetchArtworksByExhibitionId(this.exhibition.id);
  }
};
</script>

<style lang="scss">
.exhibition-time {
  color: #909399;
  font-weight: 300;
}

.exhibition-edit-delete {
  text-align: right;
  margin-right: 20px;
  i {
    color: lightgray;
    font-size: 18px;
    cursor: pointer;
    margin: 0 20px;
  }

  i.black:hover {
    color: black;
  }
  i.red:hover {
    color: red;
  }
}

.exhibition-detail {
  vertical-align: middle;
  text-align: center;
  padding-bottom: 10px;
  margin-top: 20px;
  * {
    vertical-align: middle;
  }

  h5 {
    margin: 20px auto;
    font-size: 15px;
  }

  h1 {
    font-size: 30px;
  }
}

.exhibition-users {
  color: #e6a23c;
  margin-right: 20px;
}

.exhibition-action {
  margin-top: 20px;
  vertical-align: bottom;
  text-align: right;
}

.exhibition-display-item {
  color: #909399;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    margin: 3px;
  }
}

.exhibition-display-item:hover {
  color: #303133;
}

.exhibition-box {
  margin: 20px;
  .el-card__body {
    padding: 10px;
  }
}

.exhibition-image {
  height: 100%;
  vertical-align: middle;
  margin: auto;
  img {
    border-radius: 5px;
    max-width: 200px;
    max-height: 200px;
  }
}
</style>