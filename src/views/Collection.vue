<template>
  <div>
    <h1>
      Collections
    </h1>

    <div class="collection-detail-search">
      <el-select
        v-model="collectonSearch"
        placeholder="Select"
        @change="searchCollectionDetail"
      >
        <el-option
          v-for="collection in collections"
          :key="collection.id"
          :label="collection.name"
          :value="collection.id"
        >
          <span style="float: left">{{ collection.name }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ collection.id }}</span>
        </el-option>
      </el-select>
    </div>

    <div class="collection-detail-info">
      <el-table
        class="my-table"
        :data="collectionDetail.borrowedArtworks"
        v-if="collectionDetail.borrowedArtworks.length > 0"
      >
        <el-table-column
          prop="art_object_id"
          label="Borrowed Artwork ID"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="date_borrowed"
          label="Borrow Date"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="date_returned"
          label="Return Date"
          width="150"
        >
        </el-table-column>
      </el-table>
      <el-table
        :data="collectionDetail.permanentArtworks"
        v-if="collectionDetail.permanentArtworks.length > 0"
        style="width: 100%"
      >
        <el-table-column
          prop="art_object_id"
          label="Permanent Artwork ID"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="date_acquired"
          label="Return Date"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="Statue"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="cost"
          label="Cost"
          width="150"
        >
        </el-table-column>
      </el-table>
    </div>

    <div class="body-content collection">
      <collection-list :collections="collections"></collection-list>
    </div>

  </div>
</template>

// TODO: added artwork filter by [artist, artwork name, artwork type ]

<script>
import CollectionList from "../components/CollectionList";
import { APIService } from "../utils/APIService.js";

const apiService = new APIService();

export default {
  name: "Collections",
  data() {
    return {
      collectonSearch: 1,
      collectionDetail: {},
      collections: []
    };
  },
  methods: {
    searchCollectionDetail(id) {
      this.collectionDetail = this.collections[id];
    },
    fetchCollections() {
      return apiService.fetchCollections().then(data => {
        this.collections = data;
        this.collectionSearch = this.collections[0].id;
        this.collectionDetail = this.collections[0];
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

.collection-detail-info {
  margin: 30px;
  .my-table {
    margin: 10px;
  }
}

.el-table__header-wrapper table,
.el-table__body-wrapper table {
  margin: 0 auto;
}
</style>
