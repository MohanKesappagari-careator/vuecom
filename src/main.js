import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./Routes";

const store = createStore({
  state() {
    return {
      products: [],
      allproducts: [],
    };
  },
  mutations: {
    addproducts(state, product) {
      state.allproducts = product;
    },
    addToCart(state, payload) {
      let obj = Object.assign(payload, { quantity: 1, total: payload.price });
      state.products.push(obj);
      console.log(obj);
    },
    removeCartItem(state, payload) {
      state.products.map((val, index) => {
        if (payload.id === val.id) {
          state.products.splice(index, 1);
        }
      });
    },
    removeAll(state) {
      state.products = [];
    },
    increment(state, index) {
      state.products[index].quantity = state.products[index].quantity + 1;
      state.products[index].total =
        state.products[index].total * state.products[index].quantity;
      console.log(state.products[index].quantity);
    },
    decrement(state, index) {
      if (state.products[index].quantity > 1) {
        state.products[index].quantity = state.products[index].quantity - 1;
        state.products[index].total =
          state.products[index].total * state.products[index].quantity;
        console.log(state.products[index].quantity);
      }
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
