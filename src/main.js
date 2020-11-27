import Vue from "vue";
import App from "./App.vue";
import "../src/assets/styles/tailwind.css";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import VueGtag from "vue-gtag";

Vue.use(
  VueGtag,
  {
    config: { id: "G-9DXQMTSHK8" },
  },
  router
);

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
