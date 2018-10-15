<template>
  <div>
    <div>
      Exhibition  
    </div>
  <ExhibitionList :exhibitionDetailList="exhibitions"/>
  </div>
</template>

<script>
import { exhibitions } from '../assets/database/exhibitions.json';
import ExhibitionList from '../components/ExhibitionList';

export default {
  name: 'Exhibitions',
  data() {
    return {
      exhibitions
    };
  },
  components: {
    ExhibitionList
  }
};
</script>

<style>
</style>
