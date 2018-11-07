<template>
  <div class="_edit_artwork_page body-content">
    <div class="_edit_artwork_form">
    <h1 style="margin-bottom: 50px;">
      Edit Artwork Detail
    </h1>
    <el-form :model="artworkEdit" :rules="rules" label-position="left" ref="artworkEdit" label-width="120px">
      <el-form-item label="Title" prop="title">
        <el-input v-model="artworkEdit.title"></el-input>
      </el-form-item>
      <el-form-item label="Year" prop="year">
        <el-input v-model="artworkEdit.year"></el-input>
      </el-form-item>
      <el-form-item label="Origin" prop="origin">
        <el-input v-model="artworkEdit.origin"></el-input>
      </el-form-item>
      <el-form-item label="Epoch" prop="epoch">
        <el-input v-model="artworkEdit.epoch"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="artworkEdit.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('artworkEdit')">Submit</el-button>
      </el-form-item>
    </el-form>
    </div>
    </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';
import auth from '../utils/auth';

const apiService = new APIService();

export default {
  name: 'ArtworkEdit',
  data() {
    return {
      artworkId: this.$route.params.artworkId,
      artworkEdit: {
        id: '',
        year: '',
        title: '',
        description: '',
        origin: '',
        epoch: '',
        artist_id: []
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
    returnNotAdmin() {
      if (!auth.isAdmin()) {
        this.$router.push('/');
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('edit!');
          apiService
            .updateArtwork(this.artworkId, this.artworkEdit)
            .then(res => {
              this.$router.push('/artworks');
            });
        } else {
          console.log('error edit!!');
          return false;
        }
      });
    },
    fetchArtwork(id) {
      apiService.fetchArtwork(id).then(data => {
        this.artworkEdit = data[0];
      });
    }
  },
  mounted() {
    this.returnNotAdmin();
    this.fetchArtwork(this.artworkId);
  }
};
</script>

<style lang="scss">
._edit_artwork_form {
  margin: 0 120px 0 100px;
}
</style>