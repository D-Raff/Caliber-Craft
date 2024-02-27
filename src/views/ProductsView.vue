<template>
    <div class="container-fluid" id="Products">
        <div class="row" v-if="products">
            <card v-for="product in products" :key="product.prodID">
                <template #prod-img>
                    <img class="prod-img" :src="product.prodUrl">
                </template>
                <template #prod-title>
                        {{ product.prodName }}
                </template>
                <template #Desc>
                    <p>
                        Category: {{ product.category }}
                    </p>
                    <p>
                        Amount: R{{ product.amount }}
                    </p>
                    <p>
                        Quantity: {{ product.quantity }}
                    </p>
                    <router-link :to="{ name: 'product', params: { id: product.prodID } }" id="see-more">View More</router-link>
                </template>
            </card>
        </div>
        <div class="row" v-else>
            <p class="lead">Loading</p>
        </div>
    </div>
</template>

<script>
import card from '@/components/Card.vue';
export default {
    components: {
        card
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
<style scoped>
#Products {
    min-height: 100vh;
    width: 100%;
    background: black;
}

.prod-img {
    width: 150px;
}

.card-headers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
}
.card-headers img:hover {
    transform: translate3d(0px, 0px, 60px);
}

#see-more {
    cursor: pointer;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: rgb(7, 185, 255);
    padding: 0.5rem 0.7rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
}
#see-more:hover {
  transform: translate3d(0px, 0px, 60px);
}

</style>