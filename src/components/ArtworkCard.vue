<template>
  <div>
    <div class="artwork-card" @click="dialogVisible = true">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img v-bind:src="src" class="image">
        <div >
          <span><h4> {{artworkDetail.title}} </h4></span>
          <div class="artwork-detail">
            {{artist.name}}
            <div class="artwork-tag">
              <el-row>
                <el-col :span="24">
                  <el-tag size="mini">{{artworkDetail.style}}</el-tag>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    
    <el-dialog
      top="8vh"
      :visible.sync="dialogVisible"
      width="80%"
      >
      <div class="dialog-body">
        <b-row >
          <b-col >
            <div class="artwork-dialog-image">
              <img v-bind:src="src" class="artwork-image">
              <div class="dialog-style"> 
                 <el-tag size="mini">{{artworkDetail.style}}</el-tag>
              </div>
            </div>
          </b-col>
          <b-col >
            <div class="artwork-dialog-detail">
              <h1 class="dialog-title"> {{artworkDetail.title}} </h1>
              <div><h5 class="artwork-artist" @click="goToArtist(artist.name)"> {{artist.name}} </h5></div>
              <div class="dialog-specify">
                <el-card shadow="never">  
                    <i class="material-icons info">info</i> 
                    <div> Specify infomation by each type </div> 
                    <div v-if="artworkDetail.style=='sculpture'"> SCULPTURE Material | Height | Weight | Style</div> 
                    <div v-else-if="artworkDetail.style=='painting'"> PAINTING Paint type | Material | Style </div> 
                    <div v-else-if="artworkDetail.style=='statue'"> STAUE Style | Type </div> 
                    <div v-else> OTHER Style | Type</div> 
                </el-card> 
              </div>
             
              <b-row>
                <b-col>
                  <div class="dialog-year"> <i class="material-icons"> today </i> <h6> Year : </h6> {{artworkDetail.year}} </div>
                </b-col>
                <b-col>
                  <div class="dialog-origin"> <i class="material-icons"> language </i> <h6> Origin : </h6> {{artworkDetail.origin}} </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="dialog-epoch"> <i class="material-icons"> import_contacts </i> <h6> Epoch : </h6> {{artworkDetail.epoch}} </div>
                </b-col>
              </b-row>
              <div class="dialog-description">  <el-card shadow="never"> <div> {{artworkDetail.description}} </div> </el-card> </div>
            </div>
          </b-col>
        </b-row>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeArtworkDialog" size="mini" type="danger">CLOSE</el-button>
        </span>
    </el-dialog>
    
  </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';

import { IMG_URL } from '../utils/url.js';

const apiService = new APIService();

export default {
  props: ['artwork'],
  name: 'ArtworkCard',
  data() {
    return {
      artist: {},
      artworkDetail: this.artwork,
      dialogVisible: false,
      src: ''
    };
  },
  watch: {
    artwork(newVal) {
      this.artworkDetail = newVal;
    }
  },
  methods: {
    showArtworkDialog() {
      this.dialogVisible = true;
    },
    closeArtworkDialog() {
      this.dialogVisible = false;
    },
    fetchArtist(id) {
      this.src = `${IMG_URL}/artworks/${id}.jpg`;
      return apiService.fetchArtistByArtworkId(id).then(data => {
        if (data[0]) this.artist = data[0];
      });
    },
    goToArtist(artistName) {
      this.$router.push({ path: `/artists/${artistName}` });
    }
  },
  mounted() {
    this.fetchArtist(this.artworkDetail.id);
  }
};
</script>

<style lang="scss">
div.el-dialog.el-dialog--center {
  height: 80%;
}

.dialog-body {
  margin-top: 20px;
  .el-card__body {
    padding: 10px;
  }
}

.artwork-dialog-detail {
  line-height: 30px;
  text-align: center;

  * {
    vertical-align: middle;
  }

  .dialog-description,
  .dialog-specify {
    margin: 10px auto;
  }
}

.dialog-style {
  margin-top: 10px;
}

div.el-col.el-col-15 {
  padding-top: 2em;
}

.artwork-dialog-image {
  margin: auto;
  width: 30vw;
  .artwork-image {
    max-width: 100%;
  }
}

.artwork-card {
  cursor: pointer;
  margin: 30px auto;
  max-width: 300px;
  max-height: 300px;
  .image {
    padding: 10px;
    width: 150px;
    height: 150px;
  }
}

.artwork-artist {
  color: #909399;
  cursor: pointer;
}

.artwork-artist:hover {
  color: #303133;
}

.artwork-detail {
  margin: 10px;
  a {
    color: #909399;
    font-weight: 300;
  }
}

.artwork-card .el-row {
  display: block;
  margin: 0 auto;
}

.artwork-card .el-tag {
  margin: 3px;
}
</style>
