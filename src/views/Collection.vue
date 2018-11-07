<template>
  <div>
    <h1>
      Collections
    </h1>

    <div class="body-content collection">
      <collection-list :collections="collections" ></collection-list>
    </div>

  </div>
</template>

// TODO: added artwork filter by [artist, artwork name, artwork type ]

<script>
import CollectionList from '../components/CollectionList';
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  name: 'Collections',
  data() {
    return {
      collections: []
    };
  },
  methods: {
    fetchCollections() {
      return apiService.fetchCollections().then(data => {
        this.collections = data;
      });
    }
  },
  components: {
    CollectionList
  },
  mounted() {
    this.fetchCollections();
  }
};
</script>

<style lang="scss">
.body-content.collection {
  margin: 0;
}
</style>
