import { App } from "vue"
import UiResize from "./UiResize.vue"

UiResize.install = function(Vue: App) {
  Vue.component(UiResize.name, UiResize)
}

export default UiResize