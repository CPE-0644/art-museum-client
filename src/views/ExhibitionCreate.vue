<template>
  <div class="_create_exhibition_page body-content">
    <div class="_create_exhibition_form">
    <h1 style="margin-bottom: 50px;">
      Create Exhibition
    </h1>
    <el-form :model="exhibitionCreate" :rules="rules" label-position="left" ref="exhibitionCreate" label-width="120px">
      <el-form-item label="Name" prop="name">
        <el-input v-model="exhibitionCreate.name"></el-input>
      </el-form-item>
      <el-form-item label="Start Date" prop="start_date">
        <el-input type="date" v-model="exhibitionCreate.start_date"></el-input>
      </el-form-item>
      <el-form-item label="End Date" prop="end_date">
        <el-input type="date" v-model="exhibitionCreate.end_date"></el-input>
      </el-form-item>
      <el-form-item label="Number Visitor" prop="supported_visitor">
        <el-input type="number" v-model="exhibitionCreate.supported_visitor"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('exhibitionCreate')">Submit</el-button>
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
  name: "ExhibitionCreate",
  data() {
    return {
      exhibitionId: this.$route.params.exhibitionId,
      exhibitionCreate: {
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
          alert("create!");
          this.createExhibition(this.exhibitionCreate);
        } else {
          console.log("error create!!");
          return false;
        }
      });
    },
    createExhibition(newExhibition) {
      return apiService.createExhibition(newExhibition).then(res => {
        this.$router.push("/exhibitions");
      });
    }
  },
  mounted() {
    this.returnNotAdmin();
  }
};
</script>

<style lang="scss">
._create_exhibition_form {
  margin: 0 120px 0 100px;
}
</style>
