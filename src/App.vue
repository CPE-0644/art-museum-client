<template>
  <div>
  <el-container style="font-family: 'Roboto', sans-serif;">
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <div class="container">
        <router-view></router-view>
      </div>
    </el-main>
  <el-footer height="100px">
    <Footer />
  </el-footer>
  </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
$font-fam: 'Roboto', sans-serif;

$primary-text-color: #303133;
$regular-text-color: #606266;
$secondary-text-color: #909399;
$placeholder-text-color: #c0c4cc;
$Blue: #409eff;
$Success: #67c23a;
$Warning: #e6a23c;
$Danger: #f56c6c;
$Info: #909399;
$LightBlue: #ecf8ff;

.front-end {
  font-family: $font-fam;
}

.container {
  @media screen and (min-width: 500px) {
    width: 80%;
  }
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}

footer.el-footer {
  width: 100%;
  padding: 10px;
  font-size: 0.8em;
  color: $primary-text-color;
  background-color: $LightBlue;
  line-height: 20px;
}
</style>
