<template>
  <div class="ui-card" :style="[sizeStyle]"
       :class="[flatClass, roundedClass, roundedFullClass, outlinedClass]"
  >
    <ui-progress-linear v-if="loading" :color="loadingColor" indeterminate/>
    <img v-if="img" :src="img" class="ui-card__image" :alt="alt">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"

  export default defineComponent({
    name: "ui-card",
    props: {
      flat: {
        type: Boolean,
        default: false
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
      loading: {
        type: Boolean,
        default: false
      },
      loadingColor: {
        type: String
      },
      width: {
        type: String,
        default: null
      },
      minWidth: {
        type: String,
        default: null
      },
      maxWidth: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      minHeight: {
        type: String,
        default: null
      },
      maxHeight: {
        type: String,
        default: null
      },
      img: {
        type: String,
        default: null
      },
      alt: {
        type: String,
        default: "ui card image"
      }
    },
    setup(props) {
      /* Computed */
      const sizeStyle = computed(() => {
        let sizes = {
          "width": "",
          "min-width": "",
          "max-width": "",
          "height": "",
          "min-height": "",
          "max-height": ""
        }
        if (props.width) {
          if (props.width.includes("%") || props.width.includes("px")) {
            sizes.width = props.width
          } else {
            sizes.width = props.width + "px"
          }
        }
        if (props.minWidth) {
          if (props.minWidth.includes("%") || props.minWidth.includes("px")) {
            sizes["min-width"] = props.minWidth
          } else {
            sizes["min-width"] = props.minWidth + "px"
          }
        }
        if (props.maxWidth) {
          if (props.maxWidth.includes("%") || props.maxWidth.includes("px")) {
            sizes["max-width"] = props.maxWidth
          } else {
            sizes["max-width"] = props.maxWidth + "px"
          }
        }
        if (props.height) {
          if (props.height.includes("%") || props.height.includes("px")) {
            sizes.height = props.height
          } else {
            sizes.height = props.height + "px"
          }
        }
        if (props.minHeight) {
          if (props.minHeight.includes("%") || props.minHeight.includes("px")) {
            sizes["min-height"] = props.minHeight
          } else {
            sizes["min-height"] = props.minHeight + "px"
          }
        }
        if (props.maxHeight) {
          if (props.maxHeight.includes("%") || props.maxHeight.includes("px")) {
            sizes["max-height"] = props.maxHeight
          } else {
            sizes["max-height"] = props.maxHeight + "px"
          }
        }
        return sizes
      })
      const flatClass = computed(() => props.flat ? "ui-card--flat" : "")
      const roundedClass = computed(() => props.rounded ? "ui-card--rounded" : "")
      const roundedFullClass = computed(() => props.roundedFull ? "ui-card--rounded-full" : "")
      const outlinedClass = computed(() => props.outlined ? "ui-card--outlined" : "")

      return {
        /* Computed */
        sizeStyle,
        flatClass,
        roundedClass,
        roundedFullClass,
        outlinedClass
      }
    }
  })
</script>