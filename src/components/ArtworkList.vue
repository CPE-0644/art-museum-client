<template>
  <div class="artwork-list">
    <b-container>
      <b-row>
        <b-col v-for="(artwork, index) in artworks" :key="index">
          <artwork-card :artwork="artwork"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ArtworkCard from "../components/ArtworkCard";

export default {
  props: ["artworks"],
  name: "ArtworkList",
  components: {
    ArtworkCard
  }
};
</script>

<style>
</style>
