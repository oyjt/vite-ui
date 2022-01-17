import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "github-markdown-css";
import "@/lib/vite.scss";
import "@/assets/css/index.scss";
import ViteUi from "@/lib/index";

const app = createApp(App);
app.use(router);
app.use(ViteUi);

app.mount("#app");
