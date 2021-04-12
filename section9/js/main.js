const app = new Vue({
  el: "#app",
  data: {
    isLarge: true,
    hasError: true,
    largeClass: "large",
    dangerClass: "text-danger",
    classObject: {
      large: true,
      "text-danger": true,
    },
    largeClass2: {
      large: true,
      "bg-gray": true,
    },
    dangerClass2: {
      "text-danger": true,
    },
    color: "blue",
    fontSize: 48,
    styleObject: {
      color: "blue",
      fontSize: "36px",
    },
  },
});
