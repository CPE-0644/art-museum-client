<template>
  <div class="artist-card">
    <el-collapse>
      <el-collapse-item :title="artist.name" :name="artist.id">
        <div>
          <img src="../assets/logo.png" class="image">
        </div>
        <div>Name: {{artist.name}} Live:{{artist.date_of_birth}} - {{artist.date_of_died}}</div>
        <div>Born: {{artist.country}}</div>
        <div>Style: {{artist.style}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['artist'],
  name: 'ArtworkCard'
};
</script>

<style>
.artist-card .image {
  height: 50px;
  width: 50px;
  margin: auto;
}
</style>
