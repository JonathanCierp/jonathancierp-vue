<template>
  <div class="ui-card-action" :class="[alignClass]">
		<slot />
	</div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import { ALIGN } from "../../../types"

  export default defineComponent({
    name: "ui-card-action",
    props: {
      align: {
        type: String,
        default: ALIGN.CENTER,
        validator: (value: ALIGN) => [ALIGN.LEFT, ALIGN.CENTER, ALIGN.RIGHT].includes(value)
      }
    },
    setup(props) {
      /* Computed */
      const alignClass = computed(() => props.align ? `ui-card-action--${props.align}` : "")

      return {
        /* Computed */
        alignClass
      }
    }
  })
</script>