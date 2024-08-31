
import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import { useToast } from "vue-toast-notification";
import config from "../formkit.config";



import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.css";

import "vue-toast-notification/dist/theme-sugar.css"
const $toast = useToast({
    duration: 5000,
    position: 'top-right'
});


const app = createApp(App);

app.provide("toast", $toast)


app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");
