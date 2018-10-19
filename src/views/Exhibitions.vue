<template>
  <div>
    <h1>
      Exhibition  
    </h1>
    <div class="body-content">
      <ExhibitionList :exhibitionDetailList="exhibitions"/>
    </div>
  </div>
</template>

<script>
// import { exhibitions } from '../assets/database/exhibitions.json';
import ExhibitionList from '../components/ExhibitionList';
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  name: 'Exhibitions',
  data() {
    return {
      exhibitions: []
    };
  },
  components: {
    ExhibitionList
  },
  methods: {
    fetchExhitions() {
      return apiService.fetchExhibitions().then(data => {
        this.exhibitions = data;
      });
    }
  },
  mounted() {
    this.fetchExhitions();
  }
};
</script>

<style>
</style>
