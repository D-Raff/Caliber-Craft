<template>
  <div class="container-fluid home">
    <div class="col">
      <img src="https://iili.io/JGNgqF4.png" alt="full-logo">
    </div>
    <div class="more">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://iili.io/JGNNbmG.jpg");
  background-repeat: no-repeat ;
  background-position: center;
  padding: 0;
  margin: 0;
}

.featured{
  display: flex;
  background: rgb(31,37,64);
  width: 100%;
}
img[alt="full-logo"]{
  width: 100%;
}
.col{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>