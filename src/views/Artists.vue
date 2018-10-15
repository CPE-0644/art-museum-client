<template>
  <div>
    <h1>Artist</h1>
    <div class="body-content">
      <artist-list :artists="artists"></artist-list>
    </div>
  </div>
</template>

<script>
import { artists } from '../assets/database/artists.json';
import ArtistList from '../components/ArtistList';

export default {
  name: 'Artists',
  data() {
    return {
      artists: artists.slice(0, 10)
    };
  },
  components: {
    ArtistList
  }
};
</script>

<style>
</style>
