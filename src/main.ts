import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as elIcons from "@element-plus/icons-vue";
import VFormly from "v-formly-v3/element";
import "./assets/main.css";

const app = createApp(App);
app.use(ElementPlus);
for (const [key, component] of Object.entries(elIcons)) {
  app.component(key, component);
}
app.config.globalProperties.$elIcons = elIcons;

app.use(VFormly, {
  lib: "element",
  ui: {
    errors: {
      required: "必填项"
    }
  }
});
app.mount("#app");
