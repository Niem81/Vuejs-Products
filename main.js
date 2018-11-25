var app = new Vue({
  el: '#app',
  data: {
      brand: 'Vue Moni-uestery',
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks',
      //image: './images/socks.jpeg',
      selectedVariant: 0,
      //image2: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg',
      inventory: 0,
      onSale: true,
      details: ["80% cottom", "20% polyester", "Gender neutral"],
      varients: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./images/socks.jpeg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./images/blue-socks.jpeg",
          variantQuantity: 0
        }
      ],
      cart: 0
  },
  methods: {
    addToCart: function(){
      this.cart >= 10 ? this.cart = 10 : this.cart += 1;
    },
    updateProductImage: function(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.varients[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.varients[this.selectedVariant].variantQuantity;
    }
  }
});
