<template>
  <div ref="root" class="ui-card-content" :class="[alignClass]" :style="test">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue"
  import { ALIGN } from "../../../types"

  export default defineComponent({
    name: "ui-card-content",
    props: {
      align: {
        type: String,
        default: ALIGN.CENTER,
        validator: (value: ALIGN) => [ALIGN.LEFT, ALIGN.CENTER, ALIGN.RIGHT].includes(value)
      }
    },
    setup(props) {
      /* Lyfecycle hooks */
      onMounted(() => {
        recalcCardContentHeight()
      })
      /* Datas */
      const root: any = ref(null)
      const test = ref({})
      /* Computed */
      const alignClass = computed(() => props.align ? `ui-card-content--${props.align}` : "")
      /* Methods */
      const recalcCardContentHeight = () => {
        const elements = root.value.parentElement.children
        let sumHeight = 0 

        for(let el of elements) {
          if(!el.classList.contains("ui-card__image") && !el.classList.contains("ui-card-action")) {
            console.log(el)
            console.log(el.offsetHeight)
            sumHeight += el.offsetHeight
          }
        }

        test.value = {
          height: `calc(100% - ${sumHeight}px)`
        }
      }
      
      return {
        /* Datas */
        root,
        test,
        /* Computed */
        alignClass
      }
    }
  })
</script>