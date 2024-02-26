<template>
  <div class="home">
    <img src="https://iili.io/JGNNbmG.jpg" alt="bg" id="bg-home">
    <div class="featured container">

    </div>
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>


<style>
.home{
  height: 100vh;
  width: 100vw;
}
#bg-home{
  width: 100%;
  height: 100%;
}
.featured{
  display: flex;
  background: rgb(31,37,64);
  width: 100%;
}
</style>