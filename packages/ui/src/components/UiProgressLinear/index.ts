import { App } from "vue"
import UiProgressLinear from "./UiProgressLinear.vue"

UiProgressLinear.install = function(Vue: App) {
  Vue.component(UiProgressLinear.name, UiProgressLinear)
}

export default UiProgressLinear