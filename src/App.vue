<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  .container {
    @media screen and (min-width: 500px) {
      width: 70%;
    }
    @media screen and (max-width: 700px) {
      width: 90%;
    }
    padding: 50px 0px 0px 0px;
    box-shadow: 0px 0px 10px grey;
  }
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
</style>
