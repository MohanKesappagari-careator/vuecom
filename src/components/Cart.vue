<template>
  <div class="container" v-if="$store.state.products.length !== 0">
    <div class="card-table">
      <div class="cart-product">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="item">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td><img style="width: 5rem" :src="item.image" alt="" /></td>
              <td style="width: 25%">{{ item.description }}</td>
              <td style="width: 15%">{{ item.price }}</td>
              <td style="width: 15%">
                <div class="buttons">
                  <i
                    class="fas fa-plus"
                    @click="increment(index)"
                    style="cursor: pointer"
                  ></i>
                  <p>{{ item.quantity }}</p>
                  <i
                    class="fas fa-minus"
                    @click="decrement(index)"
                    style="cursor: pointer"
                  ></i>
                </div>
              </td>
              <td style="width: 15%">{{ item.total }}</td>
              <td>
                <button
                  style="
                    color: rgb(247, 90, 90);
                    border-radius: 0.5rem;
                    border: none;
                  "
                  @click="removeCartItem(item)"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4"></td>
              <td>
                <button class="btn btn-danger" @click="removeAll">
                  Empty Cart
                </button>
              </td>
              <td>
                <button
                  class="btn btn-primary"
                  @click="
                    () => {
                      $router.push('/');
                    }
                  "
                >
                  ShopMore
                </button>
              </td>
              <td><button class="btn btn-success">Checkout</button></td>
              <td>
                <strong v-for="(t, index) in total" :key="index"
                  >GrandTotal:&#8377;{{ t }}</strong
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="container" v-if="$store.state.products.length === 0">
    <div class="card">
      <h5 class="card-title">My Cart</h5>
    </div>
    <div class="center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVgVthuk6JYE41ANXAnFN7MZRrFJSziivNQ&usqp=CAU"
        alt=""
      />
      <h4>Your cart is empty!</h4>
      <h6>Add item to it now</h6>
      <button class="btn btn-primary" @click="redirect">Shop Now</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["products"]),
    total() {
      return this.products.map(
        (val) => (this.gtotal = val.price * val.quantity)
      );
    },
  },
  methods: {
    ...mapMutations(["removeCartItem", "removeAll", "increment", "decrement"]),
    redirect() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      gtotal: 0,
    };
  },
  mounted() {
    this.products.map((val) => (this.gtotal += val.price));
  },
};
</script>

<style>
.card {
  height: 60vh;
  margin: 1.7rem;
  padding: 1.7rem;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.center .btn {
  font-size: 1rem !important;
  margin-top: 1.2rem !important;
  font-weight: 400;
  padding: 0.9rem 5rem;
  border-radius: 0.4rem !important;
}
.buttons {
  display: flex;
  margin-left: -2.5rem;
  margin-top: -0.5rem;
  justify-items: start;
  justify-content: space-evenly;
  align-items: center;
}
.buttons p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
