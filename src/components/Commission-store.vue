<template>
<div>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src= "'/images/products/'+product.image">
      </div>
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
      </div>
      <div class="price">
        <h2>${{product.price}}</h2>
        <button v-on:click="addtocart(product)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
  <h2>Cart information:</h2>
</div>
</div>
<div id="cart">
  <p v-if="cartsize == 0">Cart is empty</p>
  <div v-else>
    <p v-if="cartsize == 1">{{ cartsize }} item, ${{subtotal}}</p>
    <p v-else>{{cartsize}} items, ${{subtotal}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addtocart(product) {
      this.$root.$data.cart.push(product);
    }
  },
  computed: {
      cartsize() {
        return this.$root.$data.cart.length;
      },
      subtotal() {
        let subtotal = 0;
        for (let i = 0; i < this.$root.$data.cart.length; i++) {
          subtotal += this.$root.$data.cart[i].price;
        }
        return subtotal.toFixed(2);
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  padding: 2em;
}

.product img {
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  padding: 10px 30px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
