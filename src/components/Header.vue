<template>
   <v-toolbar fixed height="40" color="blue darken-3">
    <v-toolbar-title class="white--text">Tusave De Museum</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/">Home</router-link>
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
  color: white;
}
</style>
