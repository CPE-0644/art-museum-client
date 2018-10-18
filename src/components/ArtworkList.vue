<template>
  <div class="artwork-list">
    <el-row>
      <el-col :span="6" v-for="(artwork, index) in artworks" :key="index">
        <artwork-card :artwork="artwork"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArtworkCard from '../components/ArtworkCard';

export default {
  props: ['artworks'],
  name: 'ArtworkList',
  components: {
    ArtworkCard
  }
};
</script>

<style>
</style>
