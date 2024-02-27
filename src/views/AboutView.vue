<template>
  <div class="container-fluid" id="about">
    <div class="about-info container">
      <img src="https://iili.io/JGNgKPf.png" alt="web-logo">
      <h2>Welcome To</h2>
      <h1 class="name">CALIBER CRAFT</h1>
      <span id="text">
        <p>
          Caliber Craft is a distinguished business that specializes in the sale of firearms, catering to the needs of both
          the general public seeking personal defense solutions and professional sport shooters looking for top-quality
          equipment and exceptional service. As the name implies, Caliber Craft prides itself on the craftsmanship and
          precision of its products, ensuring that every firearm meets the highest standards of quality and reliability.
        </p>
        <p>

          Caliber Craft stands as a premier destination for individuals seeking firearms for personal defense and
          professional sport shooting enthusiasts alike. The business is deeply committed to ensuring the safety and
          security of its customers while providing top-tier service and expertise. With a name reflecting its dedication to
          precision and quality, Caliber Craft sets itself apart in the industry by upholding the highest standards of
          craftsmanship and reliability in every firearm it offers.
        </p>
      </span>
    </div>
    <!-- <img src="https://iili.io/JGw1YUQ.jpg" alt="about-bg"> -->
  </div>
</template>

<style scoped>
#about {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://iili.io/JGw1YUQ.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.about-info {
  position: relative;
  bottom: 100px;
}

img[alt="web-logo"] {
  height: 200px;
}
h2{
  color: white;
}
.name {
  font-family: Anta, sans-serif;
  font-size: 60px;
  font-weight: 900;
  color: #474C33;
}

p {
  color: white;
  backdrop-filter: blur(10px);
}
</style>