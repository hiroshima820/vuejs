Vue.component("hello-component", {
  template: "<p>Hello</p>",
});

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    count: 10,
    user: {
      firstName: "Taro",
      lastName: "Yamada",
      prefecture: "Tokyo",
      age: 28,
    },
    colors: ["Red", "Green", "Blue"],
    toggle: false,
    now: "",
  },
  methods: {
    onclick: function () {
      // alert("onclick");
      this.now = new Date().toLocaleString();
    },
  },
});
