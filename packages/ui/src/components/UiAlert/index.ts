import { App } from "vue"
import UiAlert from "./UiAlert.vue"

UiAlert.install = function(Vue: App) {
  Vue.component(UiAlert.name, UiAlert)
}

export default UiAlert