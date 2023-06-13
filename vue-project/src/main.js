import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { woahFlowers } from "./woahFlowers";
console.log(woahFlowers);

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");