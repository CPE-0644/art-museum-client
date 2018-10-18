<template>
   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-hover>
      <v-card slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline">{{exhibitionDetail.name}}</h3>
            <span >{{exhibitionDetail.start_date}} - {{exhibitionDetail.end_date}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">JOIN</v-btn>
            <div class="grey--text">
              {{exhibitionDetail.supported}} seat left
            </div>
        </v-card-actions>
      </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['exhibitionDetail'],
  name: 'ExhibitionBox'
};
</script>

<style>
.exhibition-box {
  border: 10px solid green;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
}
.exhibition-name {
  font-weight: bold;
}
</style>
