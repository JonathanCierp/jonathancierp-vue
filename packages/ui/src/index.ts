import { App } from "vue"

import UiAlert from "./components/UiAlert"

const components = [
  UiAlert
]

const install = (Vue: App) => {
  for (const component of components) {
    Vue.component(component.name, component)
  }

  //Vue.config.globalProperties.$Message = Message
  //Vue.config.globalProperties.$Notification = Notification
  //Vue.config.globalProperties.$Loading = Loadingbar
}

export default { install }

export { default as UiAlert } from "./components/UiAlert"