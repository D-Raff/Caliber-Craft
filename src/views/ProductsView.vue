<template>
    <div class="container-fluid" id="Products">
        <div class="search container">
            <input type="text" name="search" v-model="search" @input="searchProd()" id="searchBar" placeholder="Name/Category">
            <button id="sort" type="button" @click="sortPrice()">Sort By Price</button>
        </div>
        <div class="row" v-if="products" id="prod-cards">
            <card v-for="product in searchProd() || sortPrice()" :key="product.prodID">
                <template #prod-img>
                    <img class="prod-img" :src="product.prodUrl" loading="lazy">
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
                    <router-link :to="{ name: 'product', params: { id: product.prodID } }" id="see-more">View
                        More</router-link>
                </template>
            </card>
        </div>
        <div class="row" v-else>
            <div class="lead">
                <spinner />
            </div>
        </div>
    </div>
</template>

<script>
import card from '@/components/Card.vue';
import spinner from '@/components/Spinner.vue';
export default {
    components: {
        card,
        spinner
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchProd() {
            let weapons = this.$store.state.products;
            let find = this.search;
            let found = weapons.filter(prod => {
                return prod.prodName.toLowerCase().includes(find.toLowerCase()) || prod.category.toLowerCase().includes(find.toLowerCase());
            });
            return found
        },
        sortPrice() {
            let unsorted = this.$store.state.products
            if (unsorted){
                unsorted.sort((a, b) => a.amount - b.amount)
            }
        }
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
    font-family: "Rubik", sans-serif;
    min-height: 100vh;
    width: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lead {
    display: flex;
    justify-content: center;
    align-items: center;
}

#prod-cards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.prod-img {
    width: 150px;
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
.search{
    margin: 10px;
    display: flex;
    gap: 5px;
    justify-content: center;
}
#searchBar{
    border-radius: 10px;
    border: none;
}
#sort {
    border-radius: 5px;
    background-color: rgb(31, 37, 64);
    border: none;
}

@media (max-width: 396px) {
    .search{
    flex-direction: column;
    align-items: center;
}
}

</style>