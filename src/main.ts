import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl: string = process.env.VUE_APP_SUPABASE_URL!;
const supabaseKey: string = process.env.VUE_APP_SUPABASE_KEY!;

const pinia = createPinia();
const app = createApp(App);
let supabaseClient = app.provide('supabase', createClient(supabaseUrl, supabaseKey));
app.use(pinia);
app.use(router);
app.mount("#app");
