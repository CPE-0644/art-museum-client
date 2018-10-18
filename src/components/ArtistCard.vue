<template>
  <div class="artist-card">
    {{artist}}
  </div>
</template>

<script>
export default {
  props: ['artist'],
  name: 'ArtworkCard'
};
</script>

<style>
div.artist-card {
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
</style>
