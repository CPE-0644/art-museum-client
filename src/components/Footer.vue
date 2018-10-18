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
    <strong>&copy;2018 — Vuetify</strong>
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
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
</style>
