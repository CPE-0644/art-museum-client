<template>
  <div>
    <h1>Artist</h1>
    <ul>
      <li v-for="(artist, index) in artists" :key="index">{{artist}}</li>
    </ul>
  </div>
</template>

<script>
import { artists } from '../assets/database/artists.json';

export default {
  name: 'Artists',
  data() {
    return {
      artists: artists.slice(0, 10)
    };
  }
};
</script>

<style>
</style>
