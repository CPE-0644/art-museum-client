<template>
  <div class="_create_artwork_page body-content">
    <div class="_create_artwork_form">
      <h1 style="margin-bottom: 50px;">
        Create Artwork
      </h1>
      <el-form
        :model="artworkCreate"
        :rules="rules"
        label-position="left"
        ref="artworkCreate"
        label-width="120px"
      >
        <el-form-item
          label="Title"
          prop="title"
        >
          <el-input v-model="artworkCreate.title"></el-input>
        </el-form-item>
        <el-radio-group
          v-model="artworkCreate.type"
          style="padding-bottom:20px;"
        >
          <el-radio :label="1">Sculpture</el-radio>
          <el-radio :label="2">Statue</el-radio>
          <el-radio :label="3">Painting</el-radio>
          <el-radio :label="4">Other Type</el-radio>
        </el-radio-group>
        <div
          class="type-input-block"
          v-if="artworkCreate.type==1 || artworkCreate.type == 2"
        >
          <el-input
            v-model="artworkCreate.types.sculpture.material"
            placeholder="Material"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.sculpture.height"
            placeholder="Height"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.sculpture.weight"
            placeholder="Weight"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.sculpture.style"
            placeholder="Style"
          ></el-input>
        </div>
        <div
          class="type-input-block"
          v-else-if="artworkCreate.type==3"
        >
          <el-input
            v-model="artworkCreate.types.painting.paint_type"
            placeholder="Paint Type"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.painting.drawn_on"
            placeholder="Drawn On"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.painting.style"
            placeholder="Style"
          ></el-input>
        </div>
        <div
          class="type-input-block"
          v-else-if="artworkCreate.type==4"
        >
          <el-input
            v-model="artworkCreate.types.other.style"
            placeholder="Style"
          ></el-input>
          <el-input
            v-model="artworkCreate.types.other.type"
            placeholder="Type"
          ></el-input>
        </div>
        <el-form-item
          label="Year"
          prop="year"
        >
          <el-input v-model="artworkCreate.year"></el-input>
        </el-form-item>
        <el-form-item
          label="Origin"
          prop="origin"
        >
          <el-input v-model="artworkCreate.origin"></el-input>
        </el-form-item>
        <el-form-item
          label="Epoch"
          prop="epoch"
        >
          <el-input v-model="artworkCreate.epoch"></el-input>
        </el-form-item>
        <el-form-item
          label="Description"
          prop="description"
        >
          <el-input
            type="textarea"
            v-model="artworkCreate.description"
          ></el-input>
        </el-form-item>
        <el-form-item label="Artist">
          <el-select
            v-model="artworkCreate.artist_id"
            placeholder="Select Artist"
          >
            <el-option
              v-for="artist in artists"
              :key="artist.id"
              :label="artist.name"
              :value="artist.id"
            >
              <span style="float: left">{{ artist.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ artist.id }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('artworkCreate')"
          >Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { APIService } from "../utils/APIService.js";
import auth from "../utils/auth";

const apiService = new APIService();

export default {
  name: "ArtworCreate",
  data() {
    return {
      artists: [],
      artworkId: this.$route.params.artworkId,
      artworkCreate: {
        title: "",
        type: 1,
        year: "",
        description: "",
        origin: "",
        epoch: "",
        artist_id: "",
        types: {
          sculpture: {
            material: "",
            weight: "",
            height: "",
            style: ""
          },
          statue: {
            material: "",
            weight: "",
            height: "",
            style: ""
          },
          painting: {
            paint_type: "",
            drawn_on: "",
            style: ""
          },
          other: { style: "", type: "" }
        }
      },
      rules: {
        year: [{ required: true, trigger: "blur" }],
        title: [{ required: true, trigger: "blur" }],
        description: [{ required: true, trigger: "blur" }],
        origin: [{ required: true, trigger: "blur" }],
        epoch: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    returnNotAdmin() {
      if (!auth.isAdmin()) {
        this.$router.push("/");
      }
    },
    fetchArtists() {
      return apiService.fetchArtists().then(data => {
        this.artists = data;
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.createArtwork(this.artworkCreate);
        } else {
          return false;
        }
      });
    },
    createArtwork(newArtwork) {
      return apiService
        .createArtwork(newArtwork)
        .then(res => {
          if (res && res.data[0]) {
            const artworkId = res.data[0].id;
            if (this.artworkCreate.type == 1) {
              return apiService.createSculpture({
                ...this.artworkCreate.types.sculpture,
                artworkId
              });
            } else if (this.artworkCreate.type == 2) {
              return apiService.createStatue({
                ...this.artworkCreate.types.statue,
                artworkId
              });
            } else if (this.artworkCreate.type == 3) {
              return apiService.createPainting({
                ...this.artworkCreate.types.painting,
                artworkId
              });
            } else {
              return apiService.createOtherType({
                ...this.artworkCreate.types.other,
                artworkId
              });
            }
          }
        })
        .then(() => {
          alert("Create artwork success!");

          this.$router.push("/artworks");
        });
    }
  },
  mounted() {
    this.returnNotAdmin();
    this.fetchArtists();
  }
};
</script>

<style lang="scss">
._create_artwork_form {
  margin: 0 120px 0 100px;
}
.type-input-block .el-input {
  margin: 0px 10px 30px 10px;
  vertical-align: top;
  width: 150px;
}
</style>
