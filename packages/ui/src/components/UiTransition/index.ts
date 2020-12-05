import { App } from "vue"
import UiTransition from "./UiTransition.vue"

UiTransition.install = function(Vue: App) {
  Vue.component(UiTransition.name, UiTransition)
}

export default UiTransition