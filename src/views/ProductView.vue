<template>
    <div class="container-fluid" id="single-view">
        <div class=" sing-img">
            <img :src="product.prodUrl" alt="prod-png" id="prod-png" loading="lazy">
        </div>
        <div class="prod-bio">
            <img :src="product.prodBio" alt="product-bio" id="prod-bio" loading="lazy">
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
#single-view{
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sing-img{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://iili.io/JGw170x.jpg");
    margin: 0;
    padding: 0;
}
 #prod-png{
    width: 55%;
    height: 80%;
 }
 #prod-bio{
    filter: brightness(20%);
 }
 :is(#prod-bio,.prod-bio){
    width: 100%;
 }
</style>