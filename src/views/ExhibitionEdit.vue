<template>
  <div class="_edit_exhibition_page body-content">
    <div class="_edit_exhibition_form">
      <h1 style="margin-bottom: 50px;">
        Edit Exhibition Detail
      </h1>
      <el-form
        :model="exhibitionEdit"
        :rules="rules"
        label-position="left"
        ref="exhibitionEdit"
        label-width="120px"
      >
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input v-model="exhibitionEdit.name"></el-input>
        </el-form-item>
        <el-form-item
          label="Start Date"
          prop="start_date"
        >
          <el-input
            type="date"
            v-model="exhibitionEdit.start_date"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="End Date"
          prop="end_date"
        >
          <el-input
            type="date"
            v-model="exhibitionEdit.end_date"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Number Visitor"
          prop="supported_visitor"
        >
          <el-input
            type="number"
            v-model="exhibitionEdit.supported_visitor"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('exhibitionEdit')"
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
  name: "ExhibitionEdit",
  data() {
    return {
      exhibitionId: this.$route.params.exhibitionId,
      exhibitionEdit: {
        id: "",
        name: "",
        start_date: "",
        end_date: "",
        supported_visitor: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        start_date: [{ required: true, trigger: "blur" }],
        end_date: [{ required: true, trigger: "blur" }],
        description: [{ required: true, trigger: "blur" }],
        supported_visitor: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    returnNotAdmin() {
      if (!auth.isAdmin()) {
        this.$router.push("/");
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          confirm(`Edit exhibition id ${this.exhibitionId} ?`);
          apiService
            .updateExhibition(this.exhibitionId, this.exhibitionEdit)
            .then(res => {
              this.$router.push("/exhibitions");
            });
        } else {
          console.log("error edit!!");
          return false;
        }
      });
    },
    fetchExhibition(id) {
      apiService.fetchExhibition(id).then(data => {
        this.exhibitionEdit = data[0];
      });
    }
  },
  mounted() {
    this.returnNotAdmin();
    this.fetchExhibition(this.exhibitionId);
  }
};
</script>

<style lang="scss">
._edit_exhibition_form {
  margin: 0 120px 0 100px;
}
</style>
