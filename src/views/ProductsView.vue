<template>
    <div class="Products">
        <div class="row" v-if="products">
            <card v-for="product in products" :key="product.prodID">
                <template #prod-title>
                    {{ product.prodName }}
                </template>
                <template #cardBody>
                    <p>
                        Category: {{ product.category }}
                    </p>
                    <p>
                        Amount: R{{ product.amount }}
                    </p>
                    <p>
                        Quantity: {{ product.quantity }}
                    </p>
                    <router-link :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
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
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
<style>
    .Products{
        min-height: 100vh;
        width: 100%;
        background: black;
    }
</style>