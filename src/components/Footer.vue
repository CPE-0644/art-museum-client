<template>
 <v-footer
    height="auto"
    color="#64B5F6"
  >
  <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
      <div>
        {{location}}
      </div>
      <div>
        {{contact}}
      </div>
      <div>
        {{hour}}
      </div>
        <strong>&copy;2018 — Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      location: 'Here by your side',
      contact: 'info.Tusave@cmu.ac.th',
      hour: 'Everyday 1:00am. - 11.00pm.'
    };
  }
};
</script>

<style>
</style>
