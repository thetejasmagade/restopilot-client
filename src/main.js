import { createApp } from "vue";
import { createPinia } from 'pinia';
import "./assets/index.css";
import App from "./App.vue";
import { router } from "./router/index";
import '@fontsource/inter/400.css'; // This will load the default font weights and styles
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
