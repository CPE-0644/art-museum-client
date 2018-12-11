<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <h1 class="carousel-title">{{ item.title }}</h1>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["items"],
  name: "Carousel"
};
</script>

<style>
.el-carousel__item h1 {
  color: white;
  text-shadow: 2px 2px gray;
  font-size: 25px;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("../assets/exhibition.jpg");
  background-position: center;
  background-size: cover;
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url("../assets/artwork.jpg");
  background-position: center;
  background-size: cover;
}
</style>
