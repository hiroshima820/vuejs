// Vue.component("hello-component", {
//   template: "<p>Hello</p>",
// });

const helloComponent = {
  template: "<p>Hello</p>",
};

Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<div><span>count:</span><button v-on:click="count++">{{ count }}</button></div>',
});

const app = new Vue({
  el: "#app",
  data: {},
  components: {
    "hello-component": helloComponent,
  },
});
