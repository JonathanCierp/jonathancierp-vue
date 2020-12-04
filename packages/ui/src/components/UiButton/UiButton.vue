<template>
  <button role="button" class="ui-button" :type="nativeType"
          :class="[typeClass, sizeClass, roundedClass, roundedFullClass, outlinedClass, flatClass, blockClass]"
  >
    <span class="ui-button__content" :class="[hideContentIfLoadingClass]">
      <slot />
    </span>
    <span style="position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%);">
      Loading...
    </span>
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import { SIZE, TYPE } from "../../../types"

  export default defineComponent({
    name: "ui-button",
    props: {
      type: {
        type: String,
        default: TYPE.DEFAULT, // Values : "default" | "success" | "warning" | "error" | "info"
        validator: (value: TYPE) => [TYPE.DEFAULT, TYPE.SUCCESS, TYPE.WARNING, TYPE.ERROR, TYPE.INFO].includes(value)
      },
      size: {
        type: String,
        default: SIZE.MD, // Values : "xs" | "sm" | "md" | "lg" | "xl"
        validator: (value: SIZE) => [SIZE.XS, SIZE.SM, SIZE.MD, SIZE.LG, SIZE.XL].includes(value)
      },
      rounded: {
        type: Boolean,
        default: false
      },
      roundedFull: {
        type: Boolean,
        default: false
      },
      outlined: {
        type: Boolean,
        default: false
      },
      flat: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String,
        default: "button"
      },
      block: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
    setup(props, { slots, emit }) {
      /* Computed */
      const typeClass = computed(() => props.type ? `ui-button--${props.type}` : "")
      const sizeClass = computed(() => props.size ? `ui-button--${props.size}` : "")
      const roundedClass = computed(() => props.rounded ? "ui-button--rounded" : "")
      const roundedFullClass = computed(() => props.roundedFull ? "ui-button--rounded-full" : "")
      const outlinedClass = computed(() => props.outlined ?"`ui-button--outlined`" : "")
      const flatClass = computed(() => props.flat ? "ui-button--flat" : "")
      const blockClass = computed(() => props.block ? "ui-button--block" : "")
      const hideContentIfLoadingClass = computed(() => props.loading ? "ui-button__content--hidden" : "")

      return {
        /* Computed */
        typeClass,
        sizeClass,
        roundedClass,
        roundedFullClass,
        outlinedClass,
        flatClass,
        blockClass,
        hideContentIfLoadingClass
      }
    }
  })
</script>