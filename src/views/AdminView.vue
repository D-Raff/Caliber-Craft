<template>
    <div class="container-fluid" id="admin">
        <h1>ADMIN</h1>
        <div class="container tab-div">
            <h2>Users</h2>
            <button class="add" data-bs-toggle="modal" data-bs-target="#addUserModal">
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
                            <button @click="editUser(user.userID)" class="btn-edit" data-bs-toggle="modal" data-bs-target="#editUserModal"><i class="fa-solid fa-user-pen"></i></button>
                            <button @click="delUser(user.userID)" class="btn-del"><i class="fa-solid fa-user-minus"></i></button>
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
            <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#addproductModal">
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
                            <button @click="editBtn(product.prodID)" class="btn-edit" data-bs-toggle="modal"
                                data-bs-target="#productModal"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button @click="delProd(product.prodID)" class="btn-del"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addproductModalTitle">Add a Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodName" type="text" name="id" placeholder="Name"><br>
                        <input v-model="quantity" type="text" name="name" placeholder="quantity"><br>
                        <input v-model="amount" type="text" name="name" placeholder="amount"><br>
                        <input v-model="category" type="text" name="name" placeholder="Category"><br>
                        <input v-model="prodUrl" type="text" name="name" placeholder="Img Url"><br>
                        <input v-model="prodBio" type="text" name="name" placeholder="Bio img url"><br>
                        <input v-model="prodDes" type="text" name="name" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserModalTitle">Edit user</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="firstName" type="text" name="name" placeholder="First Name"><br>
                        <input v-model="lastName" type="text" name="surname" placeholder="Last Name"><br>
                        <input v-model="userPass" type="text" name="Password" placeholder="Password"><br>
                        <input v-model="userAge" type="text" name="age" placeholder="Age"><br>
                        <input v-model="gender" type="text" name="gender" placeholder="Gender"><br>
                        <input v-model="userRole" type="text" name="role" placeholder="Role"><br>
                        <input v-model="emailAdd" type="text" name="email" placeholder="Email address"><br>
                        <input v-model="userProfile" type="text" name="profile" placeholder="Profile link"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addUser()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="EditUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="EditUserModalTitle">Edit user</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="userPayload.firstName" type="text" name="name" placeholder="First Name"><br>
                        <input v-model="userPayload.lastName" type="text" name="surname" placeholder="Last Name"><br>
                        <input v-model="userPayload.userAge" type="text" name="age" placeholder="Age"><br>
                        <input v-model="userPayload.gender" type="text" name="gender" placeholder="Gender"><br>
                        <input v-model="userPayload.userRole" type="text" name="role" placeholder="Role"><br>
                        <input v-model="userPayload.emailAdd" type="text" name="email" placeholder="Email address"><br>
                        <input v-model="userPayload.userProfile" type="text" name="profile" placeholder="Profile link"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editUserBtn()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productModalTitle">Edit product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodPayload.prodName" type="text" name="name" placeholder="Product name"><br>
                        <input v-model="prodPayload.quantity" type="text" name="quantity"><br>
                        <input v-model="prodPayload.amount" type="text" name="amount"><br>
                        <input v-model="prodPayload.category" type="text" name="category"><br>
                        <input v-model="prodPayload.prodUrl" type="text" name="imageUrl"><br>
                        <input v-model="prodPayload.prodBio" type="text" name="Bio"><br>
                        <input v-model="prodPayload.prodDes" type="text" name="Desc"><br>
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
            prodPayload: {
                prodID: null,
                prodName: "",
                quantity: "",
                amount: "",
                category: "",
                prodUrl: "",
                prodBio: "",
                prodDes: "",
            },
            userPayload: {
                userID: null,
                firstName: "",
                lastName: "",
                userPass: "",
                userAge: "",
                gender: "",
                userRole: "",
                emailAdd: "",
                userProfile: "",
            }
        }
    },
    methods: {
        addProduct() {
            this.data = { prodName: this.prodName, quantity: this.quantity, amount: this.amount, category: this.category, prodUrl: this.prodUrl, prodBio: this.prodBio, prodDes: this.prodDes }
            this.$store.dispatch('addProduct', this.data);
        },
        editProduct() {
            this.$store.dispatch('editProduct', this.prodPayload);
        },
        editBtn(id) {
            this.products.forEach((item) => {
                if (item.prodID == +id) {
                    this.prodName = item.prodName
                    this.quantity = item.quantity
                    this.amount = item.amount
                    this.category = item.category
                    this.prodUrl = item.prodUrl
                    this.prodBio = item.prodBio
                    this.prodDes = item.prodDes

                    this.prodPayload = {
                        prodID: item.prodID,
                        prodName: this.prodName,
                        quantity: this.quantity,
                        amount: this.amount,
                        category: this.category,
                        prodUrl: this.prodUrl,
                        prodBio: this.prodBio,
                        prodDes: this.prodDes
                    }
                }
            })
        },
        delProd(id){
            this.$store.dispatch('deleteProduct', id);
        },
        editUser(id) {
            this.users.forEach((user) => {
                if (user.userID == +id) {
                    this.firstName = user.firstName
                    this.lastName = user.lastName
                    this.userAge = user.userAge
                    this.gender = user.gender
                    this.userRole = user.userRole
                    this.emailAdd = user.emailAdd
                    this.userProfile = user.userProfile
                    
                    this.userPayload = {
                        userID: user.userID,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userAge: this.userAge,
                        gender: this.gender,
                        userRole: this.userRole,
                        emailAdd: this.emailAdd,
                        userProfile: this.userProfile
                    }
                }
            })
        },
        editUserBtn(){
            this.$store.dispatch('updateUser', this.userPayload);
        },
        delUser(id){
            this.$store.dispatch('deleteUser', id);
        },
        addUser() {
            this.data = { firstName: this.firstName, lastName: this.lastName, userPass: this.userPass, userAge: this.userAge, gender: this.gender, userRole: this.userRole, emailAdd: this.emailAdd, userProfile: this.userProfile },
            this.$store.dispatch('register', this.data);
        },
        
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