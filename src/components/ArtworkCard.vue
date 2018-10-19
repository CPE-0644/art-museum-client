<template>
  <div>

    <div class="artwork-card" @click="dialogVisible = true">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img src="../assets/logo.png" class="image">
        <div >
          <span><h4> {{this.artworkDetail.title}} </h4></span>
          <div class="artwork-detail">
            <div class="artwork-tag">
              <el-row>
                <el-col :span="24">
                  <el-tag size="mini">Tag One</el-tag>
                  <el-tag size="mini">Tag One</el-tag>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    
    <el-dialog
      top="8vh"
      :title="artworkDetail.title"
      :visible.sync="dialogVisible"
      width="80%"
      >
      <el-row :gutter="24">
        <el-col :span="15">
          <div class="artwork-dialog-image">
            <img src="../assets/logo.png" class="artwork-image">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="artwork-dialog-detail">
            <h1 class="dialog-title"> {{artworkDetail.title}} </h1>
            <div class="dialog-style"> {{artworkDetail.style}} </div>
            <div class="dialog-year"> {{artworkDetail.year}} </div>
            <div class="dialog-description"> {{artworkDetail.description}} </div>
            <div class="dialog-origin"> {{artworkDetail.origin}} </div>
            <div class="dialog-epoch"> {{artworkDetail.epoch}} </div>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeArtworkDialog" size="mini" type="danger">Cancel</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>

<script>
export default {
  props: ['artwork'],
  name: 'ArtworkCard',
  data() {
    return {
      artworkDetail: this.artwork,
      dialogVisible: false
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
    }
  }
};
</script>

<style lang="scss">
div.el-dialog.el-dialog--center {
  height: 80%;
}

.artwork-dialog-detail {
  line-height: 30px;
  text-align: left;
}

.artwork-dialog-image {
  margin: auto;
  height: 50vh;
  width: 30vw;
}

.artwork-card {
  cursor: pointer;
  margin: 10px;
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
