<template>
  <div class="artwork-card">
    {{artwork}}
  </div>
</template>

<script>
export default {
  props: ['artwork'],
  name: 'ArtworkCard'
};
</script>

<style>
div.artwork-card {
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
</style>
