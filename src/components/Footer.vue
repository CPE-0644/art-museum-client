<template>
  <div id="footer">
    <div>
      {{location}}
    </div>
    <div>
      {{contact}}
    </div>
    <div>
      {{hour}}
    </div>
  </div>
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
#footer {
  margin: 30px auto;
  text-align: center;
  vertical-align: middle;
  display: table;
}
</style>
