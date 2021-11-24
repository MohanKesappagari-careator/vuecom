import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./Routes";

const store = createStore({
  state() {
    return {
      products: [],
      allproducts: [],
      pro: [],
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
    cart(state, index) {
      let update = { ...state.pro[index], incart: true };
      console.log(update);
      state.pro = [
        ...state.pro.slice(0, index),
        update,
        ...state.pro.slice(index + 1),
      ];
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
    incart(state) {
      console.log(state.products, "??s");
      if (
        typeof state.products !== "undefined" &&
        state.products.length === 0
      ) {
        console.log("no cart");
        state.allproducts.map((val) => {
          let obj = Object.assign(val, { incart: false });
          state.pro.push(obj);
        });
      } else {
        state.allproducts.map((pro) => {
          state.products.map((val) => {
            if (val.id === pro.id) {
              let obj = Object.assign(pro, { incart: true });
              console.log(obj, "O");
              state.pro.push(obj);
              console.log("id euql", state.pro);
            } else {
              let obj = Object.assign(pro, { incart: false });
              state.pro.push(obj);
              console.log("id not");
            }
          });
        });
      }
      console.log(state.pro[0], ">>");
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
