<template>
    <div class="container-fluid" id="admin">
        <table>
            <thead>
                <tr>
                    <th>
                        ProdImg
                    </th>
                    <th>
                        ProdID
                    </th>
                    <th>
                        ProdName
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.prodID">
                    <td></td>
                    <td>{{ product.prodID }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    components: {
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
<style>
    
</style>