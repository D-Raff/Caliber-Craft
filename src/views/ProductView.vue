<template>
    <div class="single-img">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="product.prodUrl" class="d-block w-100 weapon" alt="prod-png">
                </div>
                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
.carousel-item.active{
    background-image: url("https://iili.io/JGw170x.jpg");
}
</style>