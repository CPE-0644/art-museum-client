<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      router
      style="position: relative;"
    >
      <el-menu-item
        index="1"
        route="/"
      >JustAMuseum</el-menu-item>
      <el-menu-item
        index="2"
        route="/artworks"
      >Artworks</el-menu-item>
      <el-menu-item
        index="3"
        route="/exhibitions"
      >Exhibitions</el-menu-item>
      <el-menu-item
        index="4"
        route="/artists"
      >Artists</el-menu-item>
      <el-menu-item
        index="5"
        route="/collections"
      >Collections</el-menu-item>
      <el-menu-item
        index="6"
        route="/register"
        v-if="!isLoggedIn()"
      >Register</el-menu-item>
      <el-menu-item
        index="7"
        route="/login"
        v-if="!isLoggedIn()"
      >Sign In</el-menu-item>
      <el-menu-item
        index="8"
        v-if="isLoggedIn()"
        @click="logOut"
      >Sign Out</el-menu-item>
      log in: {{isLoggedIn()}}
      is admin : {{isAdmin()}}
    </el-menu>
  </div>
</template>

<script>
import { APIService } from "../utils/APIService.js";
import auth from "../utils/auth.js";

const apiService = new APIService();

export default {
  name: "Header",
  methods: {
    isAdmin() {
      return auth.isAdmin();
    },
    isLoggedIn() {
      return auth.isLoggedIn();
    },
    logOut() {
      return apiService.logOutUser().then(res => {
        auth.signOut();
        alert("logout!");
        location.reload();
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>
