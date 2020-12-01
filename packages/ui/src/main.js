import { createApp } from "vue"
import App from "./App.vue"
import UiVue from "./index"
import "../dist/ui-vue.css"

const app = createApp(App)

app.use(UiVue)
app.mount("#app")