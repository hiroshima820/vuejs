const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    bacePrice: 100,
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
    taxIncludedPrice: {
      get: function () {
        return parseInt(this.bacePrice * 1.1);
      },
      set: function (taxIncludedPrice) {
        this.bacePrice = Math.ceil(taxIncludedPrice / 1.1);
      },
    },
    computedNumber: function () {
      console.log("computed!");
      return Math.random();
    },
  },
  methods: {
    reversedMessageMethod: function () {
      return this.message.split("").reverse().join("");
    },
    methodsNumber: function () {
      console.log("methods!");
      return Math.random();
    },
  },
});
