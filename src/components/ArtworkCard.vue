<template>
  <div class="artwork-card" >
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/logo.png" class="image">
      <div >
        <span><h4> {{artwork.title}} </h4></span>
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
</template>

<script>
export default {
  props: ['artwork'],
  name: 'ArtworkCard'
};
</script>

<style lang="scss">
.artwork-card {
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
