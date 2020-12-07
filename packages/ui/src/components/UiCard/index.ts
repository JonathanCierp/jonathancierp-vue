import { App } from "vue"
import UiCard from "./UiCard.vue"
import UiCardTitle from "./UiCardTitle.vue"
import UiCardContent from "./UiCardContent.vue"
import UiCardAction from "./UiCardAction.vue"

UiCard.install = function(Vue: App) {
  Vue.component(UiCard.name, UiCard)
}

UiCardTitle.install = function(Vue: App) {
  Vue.component(UiCardTitle.name, UiCardTitle)
}

UiCardContent.install = function(Vue: App) {
  Vue.component(UiCardContent.name, UiCardContent)
}

UiCardAction.install = function(Vue: App) {
  Vue.component(UiCardAction.name, UiCardAction)
}

export { UiCard, UiCardTitle, UiCardContent, UiCardAction }