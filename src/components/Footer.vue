<template>
    <div class="container-fluid" id="full-footer">
        <img src="https://iili.io/JGNgqF4.png" alt="nav-logo">
        <div class="container links">
            <router-link to="/" id="link">Home</router-link>
            <router-link to="/about" id="link">About</router-link>
            <router-link to="/products" id="link">Store</router-link>
            <router-link to="/admin" id="link">Admin</router-link>
            <router-link to="/contact" id="link">Contact Us</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterComp'
}
</script>
<style scoped>
    #full-footer{
        display: flex;
        flex-wrap: wrap;
        background: linear-gradient(to bottom, rgb(1,3,9), rgb(31,37,64), rgb(1,3,9));
        min-height: 4rem;
        box-sizing: border-box;
    }
    #link{
        text-decoration: none;
        color: #42b983;
    }
    .links{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .router-link-exact-active {
        text-decoration: underline !important;
        color: aqua !important;
    }
    img[alt="nav-logo"]{
        height: 100px;
        filter: drop-shadow(0 0 1rem blue);
    }
</style>