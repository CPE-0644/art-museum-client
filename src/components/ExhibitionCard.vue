<template>
  <div class="exhibition-box">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <el-row :gutter="24">
        <el-col :span="8">
          <div class="exhibition-image">
            <img src="../assets/exhibition.jpg" class="image">
          </div>
        </el-col>
        <el-col :span="15">
          <div class="exhibition-detail">
            <h1 class="exhibtion-name">{{exhibition.name}}</h1>
            <h5 class="exhibition-time">{{ exhibition.start_date }} - {{exhibition.end_date}}</h5>
            <div class="exhibition-display-list"> 
              <h6>
                Shows items: 
              </h6>
              <span class="exhibition-display-item" v-for="(artwork, index) in artworks" :key="index" @click="goToArtwork(artwork.title)">
                  {{artwork.title}}
              </span>
            </div>
            <div class="exhibition-action">
              <a class="exhibition-users">{{exhibition.supported}} seats left</a>
              <el-button type="primary" size="small" round>JOIN NOW</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';

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
    fetchArtworksByExhibitionId(id) {
      return apiService.fetchArtworksByExhibitionId(id).then(data => {
        this.artworks = data;
      });
    },
    goToArtwork(artworkTitle) {
      this.$router.push({ path: `/artworks/${artworkTitle}` });
    }
  },
  mounted() {
    this.fetchArtworksByExhibitionId(this.exhibition.id);
  }
};
</script>

<style lang="scss">
.exhibition-box {
  max-height: 250px;
}
.exhibition-image .image {
  max-width: 150px;
  max-height: 150px;
  width: 100%;
}

.exhibition-time {
  color: #909399;
  font-weight: 300;
}

.exhibition-detail {
  text-align: left;
  padding-bottom: 10px;
}

.exhibition-users {
  color: #e6a23c;
  margin-right: 20px;
}

.exhibition-action {
  vertical-align: bottom;
  text-align: right;
}

.exhibition-display-list {
  display: inline;
}

.exhibition-display-item {
  color: #909399;
  cursor: pointer;
}

.exhibition-display-item:hover {
  color: #303133;
}

.exhibition-box {
  margin: 20px;
  .image {
    margin-top: 20px;
  }
}

.exhibition-image {
  height: 100%;
  margin: 20px 20px 20px 40px;
  vertical-align: middle;
  border-radius: 10px;
}
</style>