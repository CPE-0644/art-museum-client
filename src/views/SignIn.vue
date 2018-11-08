<template>
  <div class="_sign_in_page body-content">
    <div class="_sign_in_form">
      <h1 style="margin-bottom: 50px;">
        Sign In
      </h1>
      <el-form :model="signIn" :rules="rules" label-position="left" ref="signIn" label-width="120px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="signIn.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="signIn.password" autocomplete="off"></el-input>
        </el-form-item>
        <div class="btn">
          <el-button type="primary" @click="submitForm('signIn')">Submit</el-button>
          <el-button @click="resetForm('signIn')">Reset</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { APIService } from '../utils/APIService.js';
import auth from '../utils/auth.js';
const apiService = new APIService();

export default {
  name: 'SignIn',
  data() {
    return {
      user: {},
      logInSuccess: false,
      signIn: {
        username: '',
        passowrd: ''
      },
      rules: {
        username: [
          {
            // required: true,
            message: 'Please input username',
            trigger: 'blur'
          }
        ],
        password: [
          {
            // required: true,
            message: 'Please input password'
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          apiService.authUser(this.signIn).then(res => {
            alert('submit!');
            this.logInSuccess = true;
            this.user = res.data;
            auth.signIn(this.user);
            apiService.fetchUserById(this.user.id).then(data => {
              localStorage.setItem('userInterested', data[0].interested);
            });

            this.$router.push('/');
          });
        } else {
          console.log('error submit!!');
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
._sign_in_page {
  ._sign_in_form {
    display: block;
    min-height: 400px;
    margin: 50px 180px 0 160px;

    .btn {
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}
</style>
