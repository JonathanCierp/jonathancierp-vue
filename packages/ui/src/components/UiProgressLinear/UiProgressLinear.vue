<template>
  <div class="ui-progress-linear" :style="[heightStyle]">
    <div class="ui-progress-linear__underlay" :style="[colorStyle]"></div>
    <div v-if="!indeterminate" class="ui-progress-linear__determinate" :style="[colorStyle, widthStyle]"></div>
    <div v-if="indeterminate" class="ui-progress-linear__indeterminate">
      <div class="ui-progress-linear__indeterminate long" :style="[colorStyle]"></div>
      <div class="ui-progress-linear__indeterminate short" :style="[colorStyle]"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"

  export default defineComponent({
    name: "ui-progress-linear",
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      },
      height: {
        type: [String, Number],
        default: 4
      },
      color: {
        type: String,
        default: "#6200EE"
      },
      value: {
        type: [String, Number],
        default: 20
      }
    },
    setup(props) {
      /* Computed */
      const heightStyle = computed(() => { return { height: props.height + "px" } })
      const widthStyle = computed(() => { return { width: props.value + "%" }})
      const colorStyle = computed(() => { return { "background-color": props.color } })

      return {
        /* Computed */
        heightStyle,
        widthStyle,
        colorStyle
      }
    }
  })
</script>