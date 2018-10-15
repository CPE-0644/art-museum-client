<template>
  <div>
    <h1>
      Artworks
    </h1>
    <div class="type-choice">
      <v-btn color="#42A5F5" @click="changeShowType('painting')">Painting</v-btn>
      <v-btn color="#42A5F5" @click="changeShowType('sculpture')">Sculpture</v-btn>
      <v-btn color="#42A5F5" @click="changeShowType('statue')">Statue</v-btn>
      <v-btn color="#42A5F5" @click="changeShowType('other')">Other</v-btn>
    </div>
    <div class="body-content">
      <artwork-list :artworks="artworks"></artwork-list>
    </div>
  </div>
</template>

<script>
import { paintings } from '../assets/database/paintings.json';
import { sculptures } from '../assets/database/sculptures.json';
import { statues } from '../assets/database/statues.json';
import { other_types } from '../assets/database/other_type.json';
import ArtworkList from '../components/ArtworkList';
export default {
  name: 'Artworks',
  data() {
    return {
      showType: 'painting',
      artworks: paintings
    };
  },
  methods: {
    changeShowType(type) {
      this.showType = type;

      switch (this.showType) {
        case 'painting':
          this.artworks = paintings;
          break;
        case 'sculpture':
          this.artworks = sculptures;
          break;
        case 'statue':
          this.artworks = statues;
          break;
        case 'other':
          this.artworks = other_types;
          break;
        default:
          break;
      }
    }
  },
  components: {
    ArtworkList
  }
};
</script>

<style lang="scss">
.body-content {
  height: 1000px;
}
</style>
