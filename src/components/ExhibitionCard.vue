<template>
  <div class="exhibition-box">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <el-row :gutter="24">
        <el-col :span="8">
          <div class="exhibition-image">
            <img src="../assets/logo.png" class="image">
          </div>
        </el-col>
        <el-col :span="15">
          <div class="exhibition-detail">
            <h1 class="exhibtion-name">{{exhibitionDetail.name}}</h1>
            <h5 class="exhibition-time">{{ exhibitionDetail.start_date }} - {{exhibitionDetail.end_date}}</h5>
            <div class="exhibition-display-list"> 
              <h6>
                Shows items: 
              </h6>
              <span class="exhibition-display-item" v-for="(item, index) in exhibitionDetail.display" :key="index">
                {{item}}
              </span>
            </div>
            <div class="exhibition-action">
              <a class="exhibition-users">{{exhibitionDetail.supported}} seats left</a>
              <el-button type="primary" size="small" round>JOIN NOW</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ['exhibitionDetail'],
  name: 'ExhibitionBox'
};
</script>

<style>
.exhibition-box {
  max-height: 250px;
}
.image {
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
  display: block;
}

.exhibition-box {
  margin: 20px;
}

.exhibition-image {
  height: 100%;
  margin: 20px 20px 20px 40px;
  vertical-align: middle;
  border-radius: 10px;
}
</style>