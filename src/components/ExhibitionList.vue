<template>
  <div class="exhibition-list">
    <div v-for="(exhibition, index) in exhibitionDetailList" :key="index">
      <ExhibitionCard :exhibitionDetail="exhibition"/>
    </div>
  </div>
</template>

<script>
import ExhibitionCard from "./ExhibitionCard";
export default {
  props: ["exhibitionDetailList"],
  name: "ExhibitionList",
  components: {
    ExhibitionCard
  }
};
</script>

<style>
</style>
