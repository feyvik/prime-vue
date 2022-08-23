/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Button from "primevue/button";

import "primevue/resources/themes/tailwind-light/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";

import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component("Dialog", Dialog)
  .component("Button", Button)
  .mount("#app");
