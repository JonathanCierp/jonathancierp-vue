import { createApp } from "vue"
import App from "./App.vue"
import UiVue from "./index"

const app = createApp(App)

app.use(UiVue)
app.mount("#app")