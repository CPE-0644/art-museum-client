<template>
  <div class="_sign_up_page body-content">
    <div class="_sign_up_form">
      <h1 style="margin-bottom: 50px;">
        Sign Up
      </h1>
      <el-form
        :model="signUp"
        :rules="rules"
        label-position="left"
        status-icon
        ref="signUp"
        label-width="120px"
      >
        <el-form-item
          label="Username"
          prop="username"
        >
          <el-input v-model="signUp.username"></el-input>
        </el-form-item>
        <el-form-item
          label="Password"
          prop="password"
        >
          <el-input
            type="password"
            v-model="signUp.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input v-model="signUp.name"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="Email"
        >
          <el-input v-model="signUp.email"></el-input>
        </el-form-item>
        <el-form-item
          label="Interested type"
          prop="interested"
        >
          <el-checkbox-group v-model="signUp.interested">
            <el-checkbox
              label="Sculpture"
              name="interested"
            ></el-checkbox>
            <el-checkbox
              label="Painting"
              name="interested"
            ></el-checkbox>
            <el-checkbox
              label="Statue"
              name="interested"
            ></el-checkbox>
            <el-checkbox
              label="Other"
              name="interested"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          label="Address"
          prop="address"
        >
          <el-input
            type="text"
            v-model="signUp.address"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Phone number"
          prop="phone"
        >
          <el-input v-model.number="signUp.phone"></el-input>
        </el-form-item>
        <el-form-item
          label="Age"
          prop="age"
        >
          <el-input v-model.number="signUp.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('signUp')"
          >Submit</el-button>
          <el-button @click="resetForm('signUp')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { APIService } from "../utils/APIService.js";

const apiService = new APIService();

export default {
  name: "SignUp",
  data() {
    return {
      signUp: {
        name: "",
        email: "",
        username: "",
        password: "",
        address: "",
        phone: "",
        age: "",
        interested: []
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input username",
            trigger: "blur"
          },
          {
            min: 4,
            max: 10,
            message: "Length should be 4 to 10",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please input password"
          },
          {
            min: 4,
            max: 10,
            message: "Length should be 4 to 10",
            trigger: "blur"
          }
        ],
        name: [{ required: true, message: "Please input your name" }],
        email: [
          {
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur"]
          }
        ],
        interested: [
          {
            type: "array",
            required: true,
            message: "Please select at least one interested type",
            trigger: "change"
          }
        ],
        phone: [{ type: "number" }],
        age: [{ type: "number", message: "age must be a number" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          apiService.createUser(this.signUp).then(this.$router.push("/"));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
._sign_up_form {
  margin: 0 120px 0 100px;
}
</style>
