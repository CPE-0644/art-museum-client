<template>
  <div>
    <h1>
      Exhibition  
    </h1>

    <div class="exhibition-activitiy-button" v-if="isAdmin()">
      <el-button class="el-icon-plus" circle @click="createExhibition"></el-button>
    </div>

    <div class="body-content">
      <ExhibitionList :exhibitionDetailList="exhibitions"/>
    </div>
  </div>
</template>

<script>
// import { exhibitions } from '../assets/database/exhibitions.json';
import ExhibitionList from "../components/ExhibitionList";
import auth from "../utils/auth";
import { APIService } from "../utils/APIService.js";

const apiService = new APIService();

export default {
  name: "Exhibitions",
  data() {
    return {
      exhibitions: []
    };
  },
  components: {
    ExhibitionList
  },
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    fetchExhitions() {
      return apiService.fetchExhibitions().then(data => {
        this.exhibitions = data;
      });
    },
    createExhibition() {
      this.$router.push({ path: `exhibitions/new` });
    }
  },
  mounted() {
    this.fetchExhitions();
  }
};
</script>

<style>
.exhibition-activitiy-button {
  margin: 30px;
}
</style>
