<template>
    <button class="btn menubtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i>
    </button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <router-link to="/" id="nav-logo">
                <img src="https://iili.io/JGNgKPf.png" alt="logo">
            </router-link>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul id="list">
                <li><router-link to="/" id="nav-item">Home</router-link></li>
                <li><router-link to="/about" id="nav-item">About</router-link></li>
                <li><router-link to="/products" id="nav-item">Store</router-link></li>
                <li><router-link to="/admin" id="nav-item">Admin</router-link></li>
                <li><router-link to="/contact" id="nav-item">Contact Us</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBarComp'
}
</script>
<style scoped>
#list {
    list-style: none;
    text-decoration: none;
    padding: 0;
}
#list li {
    display: flex;
    justify-content: center;
}
.offcanvas-body{
    padding: 0;
}
.offcanvas {
    box-shadow: 2px 0px 4px 1px rgba(0,0,0,0.8);
}

#nav-item {
    text-decoration: none;
    color: #B7B5B3;
}

.router-link-exact-active {
    color: #42b983 !important;
    text-decoration: underline !important;
}

img[alt="logo"]{
    height: 200px;
    aspect-ratio: 1/1;
}
#nav-logo{
    margin-left: auto;
}
.btn-close{
    padding: 0 !important;
}

.menubtn{
    background-color: rgb(31,37,64);
    color: #42b983;
    position: absolute;
    z-index: 2;
}
.offcanvas-header{
    background: linear-gradient(to bottom, rgb(31,37,64), rgb(0,0,0));
    color: #42b983;
}
.offcanvas-body{
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://iili.io/JGw1YUQ.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>