<template>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling">Menu</button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">CaliberCraft</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="no-link-style">
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
.offcanvas-body ul{
   list-style: none;
   text-decoration: none;
}
#nav-item{
    text-decoration: none;
    color: red;
}
.router-link-exact-active {
  color: #42b983 !important;
}
:is(.offcanvas-body, .offcanvas-header){
    /* background: transparent !important; */
    background: rgba(0, 0, 0, 50%);
}
</style>