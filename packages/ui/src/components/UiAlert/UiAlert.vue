<template>
  <transition name="ui-alert-fade">
    <div role="alert" class="ui-alert" :class="[typeClass, openClass, roundedClass, flatClass]" v-if="show">
      <div class="ui-alert__content" :class="[alignClass]">
        <div v-if="icon" class="ui-alert__icon">
          <slot name="icon">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM8.843 15.295l7.42-7.42a.645.645 0 000-.912l-.913-.912a.645.645 0 00-.912 0l-6.05 6.05-2.826-2.824a.645.645 0 00-.912 0l-.913.912a.645.645 0 000 .912l4.194 4.194c.252.252.66.252.912 0z"
                  fill="currentColor"/>
            </svg>
          </slot>
        </div>
        <slot v-if="$slots.title" name="title"/>
        <span v-else class="ui-alert__content__title" v-html="title" :class="[isBold]"/>
        <p v-if="$slots.default && !description" class="ui-alert__content__description">
          <slot/>
        </p>
        <p v-if="!$slots.default && description" class="ui-alert__content__description" v-html="description"></p>
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
import { computed, defineComponent, onMounted, ref } from "vue"

const TYPE_CLASSES_MAP = {
  "default": "ui-alert--default",
  "success": "ui-alert--success",
  "warning": "ui-alert--warning",
  "error": "ui-alert--error",
  "info": "ui-alert--info"
}

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
    const isBold = computed(() => slots.default || props.description ? "ui-alert--bold" : "")
    const alignClass = computed(() => props.align ? `ui-alert__content--${ props.align }` : "")
    const typeClass = computed(() => TYPE_CLASSES_MAP[props.type] || "ui-alert--default")
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

<style scoped>
.ui-alert-fade-enter-to {
  transform: translateX(100%);
}

.ui-alert-fade-leave-to {
  transform: translateX(100%);
}

.ui-alert-fade-enter-active {
  opacity: 0;
}

.ui-alert {
  padding: 1.2rem;
  animation-duration: .5s;
  animation-fill-mode: both;
  height: auto;
  overflow: hidden;
  text-align: left;
  font-size: 16px;
  position: relative;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .5s, transform .5s, left .5s, right .5s, top .5s, bottom .5s;
}

.ui-alert--bold {
  font-weight: 700;
}

.ui-alert.ui-alert--rounded {
  border-radius: 8px;
}

.ui-alert.ui-alert--flat {
  box-shadow: none;
}

.ui-alert > .ui-alert__content {
  display: flex;
  width: 100%;
}

.ui-alert > .ui-alert__content > .ui-alert__icon {
  margin-right: 10px;
}

.ui-alert > .ui-alert__content > .ui-alert__icon {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.ui-alert > .ui-alert__content > .ui-alert__icon svg, .ui-alert > .ui-alert__close svg {
  width: 20px;
  height: 20px;
}

.ui-alert > .ui-alert__close {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ui-alert > .ui-alert__content.ui-alert__content--left {
  justify-content: flex-start;
}

.ui-alert > .ui-alert__content.ui-alert__content--center {
  justify-content: center;
}

.ui-alert > .ui-alert__content.ui-alert__content--right {
  justify-content: flex-end;
}

.ui-alert > .ui-alert__content .ui-alert__content__description {
  margin-top: 5px;
}

.ui-alert.ui-alert--default {
  color: #A1A1A1;
  background-color: #EDEDED;
  border-left: 8px solid #BABABA;
}

.ui-alert.ui-alert--success {
  color: #23AD5C;
  background-color: #C3F3D7;
  border-left: 8px solid #2ED573;
}

.ui-alert.ui-alert--warning {
  color: #CE8500;
  background-color: #FFDB9B;
  border-left: 8px solid #FFA502;
}

.ui-alert.ui-alert--error {
  color: #FF4757;
  background-color: #FFE0E3;
  border-left: 8px solid #FF4757;
}

.ui-alert.ui-alert--info {
  color: #3EB6FF;
  background-color: #D7F0FF;
  border-left: 8px solid #71C9FF;
}
</style>