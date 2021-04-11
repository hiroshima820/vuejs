Vue.filter("toUSD", function (jpy) {
  return jpy / 100;
});

Vue.filter("numberFormat", function (value) {
  return value.toLocaleString();
});

Vue.filter("readMore", function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    vhtml: 'Hello <span style="color:red">Vue.js</span>!',
    number: 100,
    ok: false,
    price: 29800000,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.co.jp",
  },
  methods: {
    clickHandler: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
  // filters: {
  //   numberFormat: function (value) {
  //     return value.toLocaleString();
  //   },
  // },
});
