<template>
  <transition :name="nameTransition" @after-leave="$emit('after-leave')">
    <slot v-if="show"/>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue"
  import { ANIMATIONS, TYPE } from "../../../types"

  export default defineComponent({
    name: "ui-transition",
    props: {
      name: {
        type: String,
        default: ANIMATIONS.FADE,
        validator: (value: ANIMATIONS) => [ANIMATIONS.FADE, ANIMATIONS.SCALE, ANIMATIONS.SLIDE_UP, ANIMATIONS.SLIDE_LEFT, ANIMATIONS.SLIDE_DOWN, ANIMATIONS.SLIDE_RIGHT].includes(value)
      },
      delay: {
        type: [String, Number],
        default: 0
      }
    },
    setup(props) {
      /* Lyfecycle hooks */
      onMounted(() => {
        setTimeout(() => {
          show.value = true
        }, props.delay)
      })
      /* Datas */
      const show = ref(false)
      /* Computed */
      const nameTransition = computed(() => "ui-transition--" + props.name)

      return {
        /* Datas */
        show,
        /* Computed */
        nameTransition
      }
    }
  })
</script>