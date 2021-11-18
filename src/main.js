import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./Routes";

const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    addToCart(state, payload) {
      let obj = Object.assign(payload, { quantity: 1, total: payload.price });
      state.products.push(obj);
      console.log(obj);
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
