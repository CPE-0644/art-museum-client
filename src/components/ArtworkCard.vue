<template>
  <div>
    <el-dialog
      title="Delete Artwork"
      :visible.sync="removeDialogVisible"
      width="30%"
    >
      <span>
        Are you sure to
        <span style="color:red;">delete</span> artwork
        <h6>{{artworkDetail.title}}</h6>
      </span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="removeDialogVisible = false">Cancel</el-button>
        <el-button
          type="danger"
          @click="deleteArtwork(artworkDetail.id)"
        >Delete</el-button>
      </span>
    </el-dialog>

    <div
      class="artwork-card"
      @click="dialogVisible = true"
    >
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
      >
        <img
          v-bind:src="src"
          class="image"
        >
        <div>
          <span>
            <h5>{{artworkDetail.title}}</h5>
          </span>
          <div class="artwork-detail">
            {{artist.name}}
            <div class="artwork-tag">
              <el-row>
                <el-col :span="24">
                  <el-tag
                    size="mini"
                    v-if="artworkDetail.artwork_type == 'painting'"
                  >{{artworkDetail.artwork_type}}</el-tag>
                  <el-tag
                    size="mini"
                    type="success"
                    v-else-if="artworkDetail.artwork_type == 'statue'"
                  >{{artworkDetail.artwork_type}}</el-tag>
                  <el-tag
                    size="mini"
                    type="warning"
                    v-else-if="artworkDetail.artwork_type == 'sculpture'"
                  >{{artworkDetail.artwork_type}}</el-tag>
                  <el-tag
                    size="mini"
                    type="info"
                    v-else
                  >{{artworkDetail.artwork_type}}</el-tag>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <el-dialog
      top="8vh"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <div class="dialog-body">
        <b-row>
          <b-col>
            <div class="artwork-dialog-image">
              <img
                v-bind:src="src"
                class="artwork-image"
              >
              <div class="dialog-style">
                <el-tag
                  size="mini"
                  v-if="artworkDetail.artwork_type == 'painting'"
                >{{artworkDetail.artwork_type}}</el-tag>
                <el-tag
                  size="mini"
                  type="success"
                  v-else-if="artworkDetail.artwork_type == 'statue'"
                >{{artworkDetail.artwork_type}}</el-tag>
                <el-tag
                  size="mini"
                  type="warning"
                  v-else-if="artworkDetail.artwork_type == 'sculpture'"
                >{{artworkDetail.artwork_type}}</el-tag>
                <el-tag
                  size="mini"
                  type="info"
                  v-else
                >{{artworkDetail.artwork_type}}</el-tag>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="artwork-dialog-detail">
              <h1 class="dialog-title">{{artworkDetail.title}}</h1>
              <div>
                <h5
                  class="artwork-artist"
                  @click="goToArtist(artist.name)"
                >{{artist.name}}</h5>
              </div>
              <div class="dialog-specify">
                <el-card shadow="never">
                  <i class="material-icons info">info</i>
                  <div v-if="artworkDetail.artwork_type=='sculpture'||artworkDetail.artwork_type=='statue'">
                    <b>Material</b>
                    {{artworkSpecifyDetail.material}} |
                    <b>Height</b>
                    {{artworkSpecifyDetail.height}} |
                    <b>Weight</b>
                    {{artworkSpecifyDetail.weight}} |
                    <b>Style</b>
                    {{artworkSpecifyDetail.style}}
                  </div>
                  <div v-else-if="artworkDetail.artwork_type=='painting'">
                    <b>Paint type</b>
                    {{artworkSpecifyDetail.paint_type}} |
                    <b>Material</b>
                    {{artworkSpecifyDetail.drawn_on}} |
                    <b>Style</b>
                    {{artworkSpecifyDetail.style}}
                  </div>
                  <div v-else-if="artworkDetail.artwork_type=='other'">
                    <b>Style</b>
                    {{artworkSpecifyDetail.style}} |
                    <b>Type</b>
                    {{artworkSpecifyDetail.type}}
                  </div>
                  <div v-else>OTHER Style | Type</div>
                </el-card>
              </div>

              <b-row>
                <b-col>
                  <div class="dialog-year">
                    <i class="material-icons">today</i>
                    <h6>Year :</h6>
                    {{artworkDetail.year}}
                  </div>
                </b-col>
                <b-col>
                  <div class="dialog-origin">
                    <i class="material-icons">language</i>
                    <h6>Origin :</h6>
                    {{artworkDetail.origin}}
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="dialog-epoch">
                    <i class="material-icons">import_contacts</i>
                    <h6>Epoch :</h6>
                    {{artworkDetail.epoch}}
                  </div>
                </b-col>
              </b-row>
              <div class="dialog-description">
                <el-card shadow="never">
                  <div>{{artworkDetail.description}}</div>
                </el-card>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div
        class="artwork-edit-delete"
        v-if="isAdmin()"
      >
        <i
          class="el-icon-edit black"
          @click="editArtwork(artworkDetail.id)"
        ></i>
        <i
          class="el-icon-delete red"
          @click="removeDialogVisible = true"
        ></i>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          @click="closeArtworkDialog"
          size="mini"
          type="danger"
        >CLOSE</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { APIService } from "../utils/APIService.js";

import { IMG_URL } from "../utils/url.js";
import auth from "../utils/auth";

const apiService = new APIService();

export default {
  props: ["artwork"],
  name: "ArtworkCard",
  data() {
    return {
      artist: {},
      artworkSpecifyDetail: {},
      artworkDetail: this.artwork,
      dialogVisible: false,
      src: "",
      removeDialogVisible: false
    };
  },
  watch: {
    artwork(newVal) {
      this.artworkDetail = newVal;
    }
  },
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    showArtworkDialog() {
      this.dialogVisible = true;
    },
    closeArtworkDialog() {
      this.dialogVisible = false;
    },
    fetchArtwork(id) {
      this.src = `${IMG_URL}/artworks/${id}.jpg`;
      return apiService.fetchArtwork(id).then(data => {
        this.artworkSpecifyDetail = data;
      });
    },
    fetchArtist(id) {
      return apiService.fetchArtistByArtworkId(id).then(data => {
        if (data[0]) this.artist = data[0];
      });
    },
    goToArtist(artistName) {
      this.$router.push({ path: `/artists/${artistName}` });
    },
    editArtwork(id) {
      this.$router.push({ path: `artworks/${id}/edit` });
    },
    deleteArtwork(id) {
      this.removeDialogVisible = false;
      apiService.deleteArtwork(id).then(location.reload());
    }
  },
  mounted() {
    this.fetchArtwork(this.artworkDetail.id);
    this.fetchArtist(this.artworkDetail.id);
  }
};
</script>

<style lang="scss">
div.el-dialog.el-dialog--center {
  height: 80%;
}

.dialog-body {
  margin-top: 20px;
  .el-card__body {
    padding: 10px;
  }
}

.artwork-edit-delete {
  text-align: right;
  margin-right: 20px;
  i {
    color: lightgray;
    font-size: 22px;
    cursor: pointer;
    margin: 0 20px;
  }

  i.black:hover {
    color: black;
  }
  i.red:hover {
    color: red;
  }
}

.artwork-dialog-detail {
  line-height: 30px;
  text-align: center;

  * {
    vertical-align: middle;
  }

  .dialog-description,
  .dialog-specify {
    margin: 10px auto;
  }
}

.dialog-style {
  margin-top: 10px;
}

div.el-col.el-col-15 {
  padding-top: 2em;
}

.artwork-dialog-image {
  margin: auto;
  width: 30vw;
  .artwork-image {
    max-width: 100%;
  }
}

.artwork-card {
  cursor: pointer;
  margin: 30px auto;
  max-width: 300px;
  max-height: 300px;
  .image {
    padding: 10px;
    width: 150px;
    height: 150px;
  }
}

.artwork-artist {
  color: #909399;
  cursor: pointer;
}

.artwork-artist:hover {
  color: #303133;
}

.artwork-detail {
  margin: 10px;
  a {
    color: #909399;
    font-weight: 300;
  }
}

.artwork-card .el-row {
  display: block;
  margin: 0 auto;
}

.artwork-card .el-tag {
  margin: 3px;
}
</style>
