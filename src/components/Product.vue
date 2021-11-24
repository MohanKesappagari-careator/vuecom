<template>
  <div class="card-top container-fluid">
    <div class="container d-flex">
      <div class="item">
        <a>
          <img
            src="https://i.pinimg.com/originals/f7/f2/a2/f7f2a27aa9d45b73d6b52a40eabb50ae.png"
            alt="Electroics"
          />
          <h6>Electonics</h6>
        </a>
      </div>
      <div class="item">
        <a>
          <img
            src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg?size=626&ext=jpg"
            alt="Fashion"
          />
          <h6>Fashion</h6>
        </a>
      </div>
      <div class="item">
        <a>
          <img
            src="https://cdn.w600.comps.canstockphoto.com/pet-shop-banner-cat-and-dog-accessories-clip-art-vector_csp84014063.jpg"
            alt="Product"
          />
          <h6>Products</h6>
        </a>
      </div>
      <div class="item">
        <a>
          <img
            src="https://i.pinimg.com/originals/1e/5d/27/1e5d270c627074a21966cd113c3aa3d1.jpg"
            alt="Jwellery"
          />
          <h6>Jewllery</h6>
        </a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="card col-md-2" v-for="(item, index) in pro" :key="item">
        <img :src="item.image" alt="" />
        <h5
          style="
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100ch;
          "
        >
          {{ item.title }}
        </h5>
        <p
          style="
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100ch;
          "
        >
          {{ item.description }}
        </p>
        <p>
          <strong style="font-size: 1rem">Price:</strong>&#8377;{{ item.price }}
        </p>

        <button
          class="btn btn-primary"
          @click="
            addToCart(item);
            cart(index);
          "
          v-if="item.incart === false"
        >
          Add to Cart
        </button>
        <button
          class="btn btn-warning"
          v-if="item.incart === true"
          @click="
            () => {
              $router.push('/cart');
            }
          "
        >
          Go to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "Product",
  data() {
    return {
      product: [],
      uri: "https://fakestoreapi.com/products",
      inCart: false,
    };
  },
  async mounted() {
    await axios
      .get(this.uri)
      .then((res) => {
        this.addproducts(res.data);
        res.data.map((val) => {
          let obj = Object.assign(val, { incart: false });
          this.product.push(obj);
        });
      })
      .catch((e) => console.log(e)),
      await this.incart();
  },
  watch: {},
  computed: {
    ...mapState(["products", "pro"]),
  },
  methods: {
    ...mapMutations(["addToCart", "addproducts", "incart", "cart"]),
  },
};
</script>
<style>
.card {
  margin: 1rem;
}
.item {
  margin: 0px 1rem;
  text-align: center;
}
.item img {
  width: 8rem;
  height: 8rem;
}
.card {
  margin: 1rem;
  padding: 4rem;
}
.card img {
  width: 10rem;
  height: 10rem;
  margin-bottom: 1rem;
  transition: 0.3s ease-in-out;
}
.card img:hover {
  transition: 0.3s ease-in-out;
  transform: scale(1.1);
}
</style>
