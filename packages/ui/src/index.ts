import { App } from "vue"

import UiAlert from "./components/UiAlert"
import UiBadge from "./components/UiBadge"
import UiButton from "./components/UiButton"
import { UiCard, UiCardTitle, UiCardContent, UiCardAction } from "./components/UiCard"
import UiProgressCircular from "./components/UiProgressCircular"
import UiProgressLinear from "./components/UiProgressLinear"
import UiResize from "./components/UiResize"
import UiTransition from "./components/UiTransition"

import "./styles/index.less"

const components = [
  UiAlert,
  UiBadge,
  UiButton,
  UiCard,
  UiCardTitle,
  UiCardContent,
  UiCardAction,
  UiProgressCircular,
  UiProgressLinear,
  UiResize,
  UiTransition,
]

const install = function(Vue: App) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  //Vue.config.globalProperties.$Message = Message
  //Vue.config.globalProperties.$Notification = Notification
  //Vue.config.globalProperties.$Loading = Loadingbar
}

export default { install }

export { default as UiAlert } from "./components/UiAlert"
export { default as UiBadge } from "./components/UiBadge"
export { default as UiButton } from "./components/UiButton"
export { UiCard, UiCardTitle, UiCardContent, UiCardAction } from "./components/UiCard"
export { default as UiProgressCircular } from "./components/UiProgressCircular"
export { default as UiProgressLinear } from "./components/UiProgressLinear"
export { default as UiResize } from "./components/UiResize"
export { default as UiTransition } from "./components/UiTransition"
