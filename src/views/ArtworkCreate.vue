<template>
  <div class="_create_artwork_page body-content">
    <div class="_create_artwork_form">
    <h1 style="margin-bottom: 50px;">
      Create Artwork
    </h1>
    <el-form :model="artworkCreate" :rules="rules" label-position="left" ref="artworkCreate" label-width="120px">
      <el-form-item label="Title" prop="title">
        <el-input v-model="artworkCreate.title"></el-input>
      </el-form-item>
      <el-form-item label="Year" prop="year">
        <el-input v-model="artworkCreate.year"></el-input>
      </el-form-item>
      <el-form-item label="Origin" prop="origin">
        <el-input v-model="artworkCreate.origin"></el-input>
      </el-form-item>
      <el-form-item label="Epoch" prop="epoch">
        <el-input v-model="artworkCreate.epoch"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="artworkCreate.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('artworkCreate')">Submit</el-button>
      </el-form-item>
    </el-form>
    </div>
    </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';

const apiService = new APIService();

export default {
  name: 'ArtworkEdit',
  data() {
    return {
      artworkId: this.$route.params.artworkId,
      artworkCreate: {
        year: '',
        title: '',
        description: '',
        origin: '',
        epoch: '',
        // TODO: FIX THIS !!!
        artist_id: 1
      },
      rules: {
        year: [{ required: true, trigger: 'blur' }],
        title: [{ required: true, trigger: 'blur' }],
        description: [{ required: true, trigger: 'blur' }],
        origin: [{ required: true, trigger: 'blur' }],
        epoch: [{ required: true, trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('create!');
          this.createArtwork(this.artworkCreate);
        } else {
          console.log('error create!!');
          return false;
        }
      });
    },
    createArtwork(newArtwork) {
      return apiService.createArtwork(newArtwork).then(res => {
        this.$router.push('/artworks');
      });
    }
  }
};
</script>

<style lang="scss">
._create_artwork_form {
  margin: 0 120px 0 100px;
}
</style>