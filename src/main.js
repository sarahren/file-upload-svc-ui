import Vue from "vue";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
import VueFilterDateParse from "@vuejs-community/vue-filter-date-parse";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

Vue.use(VueFilterDateFormat);
Vue.use(VueFilterDateParse);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
