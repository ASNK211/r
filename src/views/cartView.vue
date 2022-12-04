<template>
  <div class="add-to-cart">
    <div class="number-input" style="margin: 5% 5%">
      <input
        class="quantity bg-light"
        v-model="item.productQuanity"
        placeholder="1"
        name="quantity"
        type="number"
        style="color: black"
      />
    </div>
    <button
      type="button"
      @click="AddToCart()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      updatet
    </button>
    <div class="alert alert-danger" v-if="alert">
      {{ alert }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  props: {
    name: String,
    price: String,
    pId: String,
    serial: String,
    image: String,
    pp: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productId: this.pId,
        serial: this.serial,
        image: this.image,
        productQuanity: "" || this.pp,
      },
      alert: "",
    };
  },
  methods: {
    AddToCart() {
      const Quanity = this.item.productQuanity;
      if (Quanity <= 0) {
        this.alert = "Quantity must be at least 1.";
      } else {
        this.alert = "";
        this.$store.commit("updatetQuanity", this.item);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.buy-button {
  background-color: #f14427;
  border: none;
  padding: 1em;
  border-radius: 5px;
  font-weight: bold;
}
.buy-button:hover {
  box-shadow: 0px 5px 5px #b2bec3;
  color: #3a3636;
}
// input[type="number"] {
//   -webkit-appearance: textfield;
//   -moz-appearance: textfield;
//   appearance: textfield;
// }

.number-input {
  border: 2px solid #ddd;
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  background-color: #eeeeee;
  border: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  cursor: pointer;
  margin: 0;
  position: relative;
  padding: 0;
}

.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 2px;
  background-color: #212121;
  transform: translate(-50%, -50%);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type="number"] {
  font-family: sans-serif;
  max-width: 2.5rem;
  padding: 0.1rem;
  border: 0;
  text-align: center;
  outline: none;
}
.number-input {
  border: solid #c2c4c6;
  border-width: 2px;
}
</style>
