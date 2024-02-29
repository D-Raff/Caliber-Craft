<template>
    <div class="container-fluid" id="admin">
        <h1>ADMIN</h1>
        <div class="container tab-div">
            <h2>Users</h2>
            <button class="add">
                <i class="fa-solid fa-user-plus"></i>
            </button>
            <table class="table-secondary">
                <thead id="prod-row">
                    <tr id="prod-row">
                        <th scope="col">
                            UserID
                        </th>
                        <th scope="col">
                            First Name
                        </th>
                        <th scope="col">
                            Last Name
                        </th>
                        <th scope="col">
                            User Age
                        </th>
                        <th scope="col">
                            Gender
                        </th>
                        <th scope="col">
                            User Role
                        </th>
                        <th scope="col">
                            Email Add
                        </th>
                        <th scope="col">
                            Edit/Delete
                        </th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID" id="prod-row">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userAge }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td class="btns">
                            <button class="btn-edit"><i class="fa-solid fa-user-pen"></i></button>
                            <button class="btn-del"><i class="fa-solid fa-user-minus"></i></button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>
        <div class="container tab-div">
            <h2>Products</h2>
            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> -->
            <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#productModal">
                <i class="fa-solid fa-square-plus"></i>
            </button>
            <table class="table-secondary">
                <thead id="prod-row">
                    <tr id="prod-row">
                        <th scope="col">
                            ProdImg
                        </th>
                        <th scope="col">
                            ProdID
                        </th>
                        <th scope="col">
                            ProdName
                        </th>
                        <th scope="col">
                            Quantity
                        </th>
                        <th scope="col">
                            Amount
                        </th>
                        <th scope="col">
                            Category
                        </th>
                        <th scope="col">
                            Description
                        </th>
                        <th scope="col">
                            Edit/Delete
                        </th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID" id="prod-row">
                        <td><img :src="product.prodUrl" alt="product-img" id="tab-img"></td>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.prodDes }}</td>
                        <td class="btns">
                            <button class="btn-edit" data-bs-toggle="modal" data-bs-target="#productModal"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button class="btn-del"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>
        <!-- <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productModalTitle">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodName" type="text" name="id" placeholder="hello"><br>
                        <input v-model="quantity" type="text" name="name"><br>
                        <input v-model="amount" type="text" name="name"><br>
                        <input v-model="category" type="text" name="name"><br>
                        <input v-model="prodUrl" type="text" name="name"><br>
                        <input v-model="prodBio" type="text" name="name"><br>
                        <input v-model="prodDes" type="text" name="name"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productModalTitle">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodName" type="text" name="id" placeholder="hello"><br>
                        <input v-model="quantity" type="text" name="name"><br>
                        <input v-model="amount" type="text" name="name"><br>
                        <input v-model="category" type="text" name="name"><br>
                        <input v-model="prodUrl" type="text" name="name"><br>
                        <input v-model="prodBio" type="text" name="name"><br>
                        <input v-model="prodDes" type="text" name="name"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
    data() {
        return {
            prodName: "",
            quantity: "",
            amount: "",
            category: "",
            prodUrl: "",
            prodBio: "",
            prodDes: "",
        }
    },
    methods: {
        addProduct() {
            this.data = { prodName: this.prodName, quantity: this.quantity, amount: this.amount, category: this.category, prodUrl: this.prodUrl, prodBio: this.prodBio, prodDes: this.prodDes }
            this.$store.dispatch('addProduct', this.data);
        },
        editProduct() {
            this.data = { prodName: this.prodName, quantity: this.quantity, amount: this.amount, category: this.category, prodUrl: this.prodUrl, prodBio: this.prodBio, prodDes: this.prodDes }
            this.$store.dispatch('editProduct', this.data);
        }

    },
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
    }

}
</script>
<style>
#admin {
    background: #010309;
    padding: 30px;
}

#tab-img {
    height: 20px;
}

.table-secondary {
    background: rgba(217, 217, 217, 31%);
}

tr td {
    border: 1px solid black;
}

th {
    border: 1px solid black;
    color: #42b983;
}

.tab-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

h1 {
    color: #841818;
    font-family: Anta, sans-serif;
    font-size: 5rem;
    text-decoration: underline;
}

h2 {
    color: #42b983;
}

:is(.btn-edit, .btn-del) {
    border-radius: 10px;
    border: none;
    width: 70px;
    margin: 5px;
}

.btn-edit {
    background: #42b983;
}

.btn-del {
    background: #841818;
}

.add {
    width: 30px;
    background: transparent;
    border: none;
    color: #42b983;
    transition: 0.8s;
}

.add:hover {
    box-shadow: inset 0px 0px 4px 2px #42b983;
}
</style>