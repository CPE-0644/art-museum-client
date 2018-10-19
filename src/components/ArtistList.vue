<template>
  <div class="artist-list">
    <div v-for="(artist, index) in artists" :key="index">
      <artist-card :artistDetail="artist"/>
    </div>
  </div>
</template>

<script>
import ArtistCard from '../components/ArtistCard';

export default {
  props: ['artists'],
  name: 'ArtistList',
  components: {
    ArtistCard
  }
};
</script>

<style>
</style>
