<template>
    <div class="container-fluid" id="single-view">
        <div class=" sing-img">
            <img :src="product.prodUrl" alt="prod-png" id="prod-png" loading="lazy">
        </div>
        <div class="prod-bio">
            <img :src="product.prodBio" alt="product-bio" id="prod-bg" loading="lazy">
            <div class="container prod-details">
                <h2>ABOUT</h2>
                <p>name: {{ product.prodName }}</p>
                <p>Price: R{{ product.amount }}</p>
                <p class="desc">About: {{ product.prodDes }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
}
</script>
<style scoped>
#single-view {
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Rubik", sans-serif;;
}

.sing-img {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://iili.io/JGw170x.jpg");
    margin: 0;
    padding: 0;
}

#prod-png {
    width: 55%;
    height: 80%;
}

#prod-bg {
    position: absolute;
    width: 100% !important;
    height: 100%;
    filter: brightness(20%);
    object-fit: cover;
    z-index: 1;
}

.prod-bio{
    width: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    /* color: white; */
    color: #B7B5B3;
}
.prod-details{
    z-index: 2;
    line-height: 100px;
    position: relative;
    top: 2rem;
}
.desc{
    line-height:normal;
}

h2{
    text-decoration: underline;
    color: #841818;
    font-size: 4rem;
}

</style>