import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "@/service/UserAuthentication";
const dbURL = "https://calibercraft.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let msg = (await axios.post(`${dbURL}users/`, payload)).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Sign Up",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "login" }); //FIX THIS
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let results = (await axios.get(`${dbURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving Users",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}users/${payload.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this user was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let msg = await axios.patch(`${dbURL}users/update/${payload.id}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Updated this user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while updating this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async deleteUser(context, payload) {
      try {
        let msg = await axios.delete(`${dbURL}users/${payload.id}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Deleted user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while trying to delete this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${dbURL}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("VerifiedUser", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome, 
          ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "inf0",
            text: msg,
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let results  = (await axios.get(`${dbURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while trying to retrieve Products",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}products/${payload.id}`))
          .data;
          // console.log(, result)
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet.alert({
            title: "Retrieve a single product",
            text: "This product was not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this product was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
  },
  modules: {},
});
