import { App } from "vue"
import UiBadge from "./UiBadge.vue"

UiBadge.install = function(Vue: App) {
  Vue.component(UiBadge.name, UiBadge)
}

export default UiBadge