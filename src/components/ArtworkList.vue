<template>
  <div class="artwork-list">
    <div v-for="(artwork, index) in artworks" :key="index">
      <artwork-card :artwork="artwork"/>
    </div>
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
