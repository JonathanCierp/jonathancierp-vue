<template>
  <transition name="ui-alert-fade">
    <div role="alert" class="ui-alert" :class="[typeClass, openClass, roundedClass, flatClass]" v-if="show">
      <div class="ui-alert__content" :class="[alignClass]">
        <div v-if="icon" class="ui-alert__icon">
          <slot name="icon">
            <svg v-if="type === 'default'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0zM4.677 11.613a.485.485 0 01-.483-.484V8.871c0-.266.217-.484.483-.484h10.646c.266 0 .483.218.483.484v2.258a.485.485 0 01-.483.484H4.677z"
                  fill="currentColor"/>
            </svg>
            <svg v-if="type === 'success'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM8.843 15.295l7.42-7.42a.645.645 0 000-.912l-.913-.912a.645.645 0 00-.912 0l-6.05 6.05-2.826-2.824a.645.645 0 00-.912 0l-.913.912a.645.645 0 000 .912l4.194 4.194c.252.252.66.252.912 0z"
                  fill="currentColor"/>
            </svg>
            <svg v-if="type === 'warning'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20 10c0 5.524-4.477 10-10 10-5.522 0-10-4.476-10-10C0 4.48 4.478 0 10 0c5.523 0 10 4.48 10 10zm-10 2.016a1.855 1.855 0 100 3.71 1.855 1.855 0 000-3.71zM8.239 5.35l.3 5.484a.484.484 0 00.482.457h1.958c.257 0 .469-.2.483-.457l.299-5.484a.484.484 0 00-.483-.51H8.722a.484.484 0 00-.483.51z"
                  fill="currentColor"/>
            </svg>
            <svg v-if="type === 'error'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0zm4.903 12.625c.19.19.19.496 0 .685l-1.597 1.593a.484.484 0 01-.685 0L10 12.258l-2.625 2.645a.484.484 0 01-.685 0l-1.593-1.597a.484.484 0 010-.685L7.742 10 5.097 7.375a.484.484 0 010-.685l1.597-1.597c.19-.19.496-.19.685 0L10 7.742l2.625-2.645c.19-.19.496-.19.685 0l1.597 1.597c.19.19.19.496 0 .685L12.258 10l2.645 2.625z"
                  fill="currentColor"/>
            </svg>
            <svg v-if="type === 'info'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 0C4.478 0 0 4.48 0 10c0 5.524 4.478 10 10 10 5.523 0 10-4.476 10-10 0-5.52-4.477-10-10-10zm0 4.435a1.694 1.694 0 110 3.388 1.694 1.694 0 010-3.388zm2.258 10.242a.484.484 0 01-.484.484H8.226a.484.484 0 01-.484-.484v-.967c0-.268.217-.484.484-.484h.484v-2.58h-.484a.484.484 0 01-.484-.485v-.967c0-.268.217-.484.484-.484h2.58c.268 0 .484.216.484.484v4.032h.484c.267 0 .484.216.484.484v.967z"
                  fill="currentColor"/>
            </svg>
          </slot>
        </div>
        <div>
          <slot v-if="$slots.title" name="title"/>
          <span v-else class="ui-alert__content__title" v-html="title" :class="[isBold]"/>
          <!--         <p v-if="$slots.default && !description" class="ui-alert__content__description">
                     <slot/>
                   </p>
                   <p v-if="!$slots.default && description" class="ui-alert__content__description" v-html="description"></p>-->
        </div>
      </div>
      <div v-if="closable" class="ui-alert__close" @click="close">
        <slot name="close">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0zm4.903 12.625c.19.19.19.496 0 .685l-1.597 1.593a.484.484 0 01-.685 0L10 12.258l-2.625 2.645a.484.484 0 01-.685 0l-1.593-1.597a.484.484 0 010-.685L7.742 10 5.097 7.375a.484.484 0 010-.685l1.597-1.597c.19-.19.496-.19.685 0L10 7.742l2.625-2.645c.19-.19.496-.19.685 0l1.597 1.597c.19.19.19.496 0 .685L12.258 10l2.645 2.625z"
                fill="currentColor"/>
          </svg>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue"

export default defineComponent({
  name: "UiAlert",
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "default" // Values "default" |"success" |"warning" |"error" |"info"
    },
    align: {
      type: String,
      default: "left" // Values "start" | "center" | "end"
    },
    icon: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    /* Lyfecycle hooks */
    onMounted(() => {
      document.querySelector("body").style.overflow = "hidden"
      show.value = true
    })
    /* Datas */
    const show = ref(false)
    /* Computed */
    const isBold = ""//computed(() => slots.default || props.description ? "ui-alert--bold" : "")
    const alignClass = computed(() => props.align ? `ui-alert__content--${ props.align }` : "")
    const typeClass = computed(() => props.type ? `ui-alert--${ props.type }` : "")
    const openClass = computed(() => props.show ? "ui-alert--show" : "ui-alert--close")
    const roundedClass = computed(() => props.rounded ? "ui-alert--rounded" : "")
    const flatClass = computed(() => props.flat ? "ui-alert--flat" : "")

    /* Methods */
    const close = () => {
      show.value = false
    }

    return {
      /* Datas */
      show,
      /* Computed */
      isBold,
      alignClass,
      typeClass,
      openClass,
      roundedClass,
      flatClass,
      /* Methods */
      close
    }
  }
})
</script>