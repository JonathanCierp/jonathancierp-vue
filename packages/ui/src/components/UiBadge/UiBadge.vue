<template>
  <span class="ui-badge" :class="[typeClass]">
    <slot/>
		<span class="ui-badge__wrapper">
			<span class="ui-badge__badge" :style="[insetStyle]" aria-atomic="true" aria-label="Badge" aria-live="polite"
            role="status">{{ content }}</span>
		</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { TYPE } from "../../../types"

export default defineComponent({
  name: "ui-badge",
  props: {
    type: {
      type: String,
      default: TYPE.DEFAULT, // Values "default" |"success" |"warning" |"error" |"info"
      validator: (value: TYPE) => [TYPE.DEFAULT, TYPE.SUCCESS, TYPE.WARNING, TYPE.ERROR, TYPE.INFO].includes(value)
    },
    inset: {
      type: [String, Number],
      default: "4"
    },
    content: {
      type: [String, Number],
      default: ""
    }
  },
  setup(props) {
    /* Computed */
    const typeClass = computed(() => props.type ? `ui-badge--${props.type}` : "")
    const insetStyle = computed(() => {
      return { inset: `auto auto calc(100% - ${props.inset}px) calc(100% - ${props.inset}px)` }
    })

    return {
      /* Computed */
      typeClass,
      insetStyle
    }
  }
})
</script>