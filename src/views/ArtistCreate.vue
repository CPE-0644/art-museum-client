<template>
  <div class="_create_artist_page body-content">
    <div class="_create_artist_form">
      <h1 style="margin-bottom: 50px;">
        Create Artist
      </h1>
      <el-form
        :model="artistCreate"
        :rules="rules"
        label-position="left"
        ref="artistCreate"
        label-width="120px"
      >
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input v-model="artistCreate.name"></el-input>
        </el-form-item>
        <el-form-item
          label="Born"
          prop="date_of_birth"
        >
          <el-input
            type="date"
            v-model="artistCreate.date_of_birth"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Dead"
          prop="date_of_died"
        >
          <el-input
            type="date"
            v-model="artistCreate.date_of_died"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Country"
          prop="country"
        >
          <el-input v-model="artistCreate.country"></el-input>
        </el-form-item>
        <el-form-item
          label="Epoch"
          prop="epoch"
        >
          <el-input v-model="artistCreate.epoch"></el-input>
        </el-form-item>
        <el-form-item
          label="Style"
          prop="style"
        >
          <el-input v-model="artistCreate.style"></el-input>
        </el-form-item>
        <el-form-item
          label="Description"
          prop="description"
        >
          <el-input
            type="textarea"
            v-model="artistCreate.description"
          ></el-input>
        </el-form-item>
        <el-button
          type="primary"
          @click="submitForm('artistCreate')"
        >Submit</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { APIService } from "../utils/APIService.js";

const apiService = new APIService();

export default {
  name: "ArtistCreate",
  data() {
    return {
      artistId: this.$route.params.artistId,
      artistCreate: {
        name: "",
        date_of_birth: "",
        date_of_died: "",
        country: "",
        epoch: "",
        style: "",
        description: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        date_of_birth: [{ required: true, trigger: "blur" }],
        date_of_died: [{ required: true, trigger: "blur" }],
        country: [{ trigger: "blur" }],
        epoch: [{ trigger: "blur" }],
        style: [{ trigger: "blur" }],
        description: [{ trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("Create artist success!");
          this.createArtist(this.artistCreate);
        } else {
          return false;
        }
      });
    },
    createArtist(newArtist) {
      return apiService.createArtist(newArtist).then(res => {
        this.$router.push("/artists");
      });
    }
  }
};
</script>

<style lang="scss">
._create_artist_form {
  margin: 0 120px 0 100px;
}
</style>
