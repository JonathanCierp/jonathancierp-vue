<template>
  <div ref="root" class="ui-resize"/>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue"

  export default defineComponent({
    name: "ui-resize",
    setup(props, { emit }) {
      /* Lyfecycle hooks */
      onMounted(() => {
        const object = document.createElement("object")
        resizeObject.value = object
        object.setAttribute("aria-hidden", "true")
        object.setAttribute("tabindex", -1)
        object.onload = addResizeHandlers
        object.type = "text/html"
        root.value.append(object)
        object.data = "about:blank"
      })
      onBeforeUnmount(() => {
        resizeObject.value.contentDocument.defaultView.removeEventListener("resize", onResize)
      })
      /* Datas */
      const root = ref(null)
      const resizeObject = ref(null)
      const height = ref(null)
      const width = ref(null)

      /* Methods */
      const onResize = () => {
        height.value = window.innerHeight
        width.value = window.innerWidth

        emit("resize", { width: width.value, height: height.value })
      }
      const addResizeHandlers = () => {
        resizeObject.value.contentDocument.defaultView.addEventListener("resize", onResize)
      }

      return {
        /* Datas */
        root,
        resizeObject,
        height,
        width,
        /* Methods */
        onResize,
        addResizeHandlers
      }
    }
  })
</script>