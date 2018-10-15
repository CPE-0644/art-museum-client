<template>
  <div class="exhibition-list">
    <div v-for="(exhibition, index) in exhibitionDetailList" :key="index">
      <ExhibitionBox :exhibitionDetail="exhibition"/>
    </div>
  </div>
</template>

<script>
import ExhibitionBox from './ExhibitionBox';
export default {
  props: ['exhibitionDetailList'],
  name: 'ExhibitionList',
  components: {
    ExhibitionBox
  }
};
</script>

<style>
</style>
