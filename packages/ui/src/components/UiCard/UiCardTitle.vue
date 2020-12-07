<template>
  <h3 class="ui-card-title" :class="[alignClass]">
    <slot/>
  </h3>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import { ALIGN } from "../../../types"

  export default defineComponent({
    name: "ui-card-title",
    props: {
      align: {
        type: String,
        default: ALIGN.CENTER,
        validator: (value: ALIGN) => [ALIGN.LEFT, ALIGN.CENTER, ALIGN.RIGHT].includes(value)
      }
    },
    setup(props) {
      /* Computed */
      const alignClass = computed(() => props.align ? `ui-card-title--${props.align}` : "")

      return {
        /* Computed */
        alignClass
      }
    }
  })
</script>