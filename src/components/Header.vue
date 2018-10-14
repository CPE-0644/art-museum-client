<template>
   <v-toolbar fixed height="50">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/"><a class="plain-link">Home</a></router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/exhibitions">Exhibition</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/artworks">Artwork</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/artists">Artist</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
</style>
