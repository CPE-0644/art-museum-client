<template>
  <div class="artist-card">
    <el-collapse>
      <el-collapse-item :title="artist.name" :name="artist.id">
        <b-container>
          <el-card shadow="hover">
            <b-row>
                <b-col class="artist-head">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img v-bind:src="src" class="image">
                    <div style="padding: 14px;">
                      <span style="font-size:20px">{{artist.name}}</span>
                      <div class="bottom clearfix">
                        <time class="time">  
                          <span style="color: #777;">{{artist.date_of_birth}}</span> to
                          <span style="color: #777;" v-if="artist.date_of_died == '0000-00-00'">NOW</span>  
                          <span style="color: #777;" v-else>{{artist.date_of_died}}</span>  
                        </time>
                      </div>
                    </div>
                  </el-card>
                </b-col>
                <b-col class="artist-detail" cols="9">  
                    <!-- <h5> Information </h5> -->
                    <div class="information">
                      <b-row>
                        <b-col>
                          <div class="center">
                            <h3>{{artist.name}}</h3>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <div> <i class="material-icons"> language </i> <h6> Country : </h6> {{artist.country}} </div>
                        </b-col>
                        <b-col>
                          <div><i class="material-icons"> today </i><h6> Epoch: </h6> {{artist.epoch}} </div>
                        </b-col>
                        <b-col>
                          <div><i class="material-icons"> import_contacts </i><h6> Style: </h6> {{artist.style}} </div>
                        </b-col>
                      </b-row>
                      <div class="description">  <el-card shadow="never"> <div> {{artist.description}} </div> </el-card> </div>
                    </div>
                </b-col>
            </b-row>
          </el-card>
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

.artist-head {
  h3 {
    margin-top: 20px;
  }
}

.artist-card .image {
  width: 100%;
  height: 100%;
}

.artist-detail {
  text-align: left;
  margin: auto;
  vertical-align: middle;
  .col {
    margin: 10px auto;
  }
  h5 {
    text-align: center;
  }
  .information {
    i {
      font-size: 20px;
    }
    margin-left: 20px;
  }
  * {
    vertical-align: middle;
  }
  .description {
    margin-top: 10px;
    div {
      display: block;
      text-align: center;
    }
  }

  .center {
    text-align: center;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both;
  }
}

.artist-card h5 {
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
