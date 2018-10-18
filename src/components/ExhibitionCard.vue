<template>
<div class="exhibition-box">
          <div>
            <h3 class="headline">{{exhibitionDetail.name}}</h3>
            <span >{{exhibitionDetail.start_date}} - {{exhibitionDetail.end_date}}</span>
          </div>
              {{exhibitionDetail.supported}} seat left
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
div.exhibition-box {
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
</style>
