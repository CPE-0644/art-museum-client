<template>
<div>
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal" 
     router style="position: relative;">
    <el-menu-item index="1" route="/">JustAMuseum</el-menu-item>
    <el-menu-item index="2" route="/artworks">Artworks</el-menu-item>
    <el-menu-item index="3" route="/exhibitions">Exhibitions</el-menu-item>
    <el-menu-item index="4" route="/artists">Artists</el-menu-item>
    <el-menu-item index="5" route="/collections">Collections</el-menu-item>
    <el-menu-item index="6" route="/users" disabled>Users</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>
</style>
