<template>
  <header>
    <div class="navbar navbar-dark bg-primary shadow-sm">
      <div class="navabr-brad align-item-center d-flex">
        <i class="fas fa-shipping-fast logo">&nbsp;<strong>Kart</strong></i>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="search products"
          />
        </div>
        <span class="fas fa-search search-item"></span>
      </div>
      <button class="btn btn-primnary">
        <router-link to="/cart">
          <i class="fas fa-cart-plus cart">
            <div class="badge bg-danger">
              {{ $store.state.products.length }}
            </div>
          </i>
        </router-link>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.logo {
  color: white;
  font-size: 3rem;
  margin-left: 0.8rem;
}
strong {
  font-size: 2rem;
}
.form-control {
  margin-left: 2rem;
  width: 30rem;
  margin-top: 0.5rem;
  border-radius: 0.3rem;
}
.search-item {
  position: absolute;
  z-index: 10;
  top: 1.6rem;
  right: 52%;
  color: blue;
}
.cart {
  color: white;
  font-size: 1.8em;
}
.badge {
  font-size: 0.7rem;
}
</style>
