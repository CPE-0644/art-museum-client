<template>
  <div class="exhibition-box">
    <div class="exhibition-name">
      {{exhibitionDetail['name']}}  
    </div>
    <div class="exhibition-start-date">
      Start date:
      {{exhibitionDetail['start-date']}}
    </div>
    <div class="exhibition-end-date">
      End date:
      {{exhibitionDetail['end-date']}}
    </div>
    <div class="exhibition-show-artworks">
      Shows: 
      <ul>
        <li v-for="(artwork, index) in exhibitionDetail['display']" :key="index">
          {{artwork}}
        </li>
      </ul>
    </div>
    <div class="exhibition-supported-users">
      Supported users:
      {{exhibitionDetail['number-supported-users']}}
    </div>
  </div>
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
