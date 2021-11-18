import { createWebHistory, createRouter } from "vue-router";
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
