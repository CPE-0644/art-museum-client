<template>
  <div class="artwork-card" @click="goToDetail()">
    {{artwork}}
  </div>
</template>

<script>
export default {
  props: ['artwork'],
  name: 'ArtworkCard',
  methods: {
    goToDetail() {
      this.$router.push();
    }
  }
};
</script>

<style>
div.artwork-card {
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
</style>
