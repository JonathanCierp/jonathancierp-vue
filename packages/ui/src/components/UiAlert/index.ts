import UiAlert from "./UiAlert.vue"
import { App } from "vue"

UiAlert.install = (Vue: App) => {
  Vue.component(UiAlert.name, UiAlert)
}

export default UiAlert