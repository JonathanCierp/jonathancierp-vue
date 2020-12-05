import { App } from "vue"
import UiProgressCircular from "./UiProgressCircular.vue"

UiProgressCircular.install = function(Vue: App) {
  Vue.component(UiProgressCircular.name, UiProgressCircular)
}

export default UiProgressCircular