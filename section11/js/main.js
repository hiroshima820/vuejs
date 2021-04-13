const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    message: "",
  },
  methods: {
    clickHandler2: function (event) {
      this.counter++;
      console.log(event);
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
      console.log(event.target.type);
    },
    clickHandler3: function ($event, message) {
      this.message = message;
      console.log($event);
      // this.counter++;
    },
    clickHandler4: function () {
      this.message = new Date().toLocaleTimeString();
    },
    clear: function () {
      this.message = "";
    },
    clickHandler5: function () {
      alert("shift + click");
    },
    clickHandler6: function () {
      alert("Clicked!");
    },
  },
});
