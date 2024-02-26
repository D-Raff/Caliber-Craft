<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anta&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(31,37,64);
}
::-webkit-scrollbar{
  display: none;
}

</style>
