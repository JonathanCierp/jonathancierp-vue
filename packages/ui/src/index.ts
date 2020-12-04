import { App } from "vue"

import UiAlert from "./components/UiAlert"
import UiBadge from "./components/UiBadge"
import UiButton from "./components/UiButton"

import "./styles/index.less"

const components = [
  UiAlert,
  UiBadge,
  UiButton,
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