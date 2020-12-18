<template>
<div>
<div class="commission">
  <img id="example" src="../../images/commissions/roommates.jpg">
  <div class="details">
    <h2>Commission a custom portrait!</h2>
    <p>$10 per person and $5 per significant element, like a pet.</p>
    <p>Max price is $100, but subject to change at artist's discretion.</p>
    <form>
      <label for="txtinput">Name:</label>
      <input type="text" id="entry-name" name="name-entry">
    </form>
    <p>Number of people:</p>
    <form>
      <input type="radio" id="1person" name="people" value="one">
      <label for="one">1</label>
      <input type="radio" id="2person" name="people" value="two">
      <label for="two">2</label>
      <input type="radio" id="3person" name="people" value="three">
      <label for="three">3</label>
      <input type="radio" id="4person" name="people" value="four">
      <label for="one">4</label>
      <input type="radio" id="5person" name="people" value="five">
      <label for="five">5</label>
      <input type="radio" id="6person" name="people" value="six">
      <label for="six">6</label>
      <input type="radio" id="7person" name="people" value="seven">
      <label for="seven">7</label>
      <input type="radio" id="8person" name="people" value="eight">
      <label for="eight">8</label>
      <input type="radio" id="9person" name="people" value="nine">
      <label for="nine">9</label>
      <input type="radio" id="10person" name="people" value="ten">
      <label for="ten">10 or more</label>
    </form>
    <!-- idk one day these might do something -->
    <button type="input" name="upload">Upload Image</button>
    <form>
      <label for="txtinput">(Optional) Describe any special requests or circumstances</label>
      <input type="text" id="txt-description" name="txtinput">
    </form>
    <button name="order">Order</button>
    </div>
</div>
    <h1> Other products </h1>
    <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/Commission-store.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  },
}
</script>

<style scoped>
.commission {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 2em;
}

#example {
  width: 400px;
  height: 400px;
  padding: 1em;
  border-radius: 50px;
}

h2 {
  font-family: 'Cedarville Cursive';
  font-size: 2.5em;
}

form {
  margin: 0.25em;
}

input[type="radio"]{
  margin: 0.25em;
}

button {
  padding: 0.25em;
  margin: 0.5em;
}

.store-section {
  padding-top: 2em;
  text-align: center;
}

#museum-grid {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}

.paintingimg {
  max-width: 300px;
  max-height: 450px;
  padding: 1em;
}

</style>
