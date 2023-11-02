import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Compete from "@/components/Compete.vue";
import Challenge from "@/components/Challenge.vue";
import Practice from "@/components/Practice.vue";
import Menu from "@/components/Menu.vue";

const pinia = createPinia();
const app = createApp(App);
app.component("Compete", Compete);
app.component("Challenge", Challenge);
app.component("Practice", Practice);
app.component("Menu", Menu);
app.use(pinia);
app.use(router);
app.mount("#app");
