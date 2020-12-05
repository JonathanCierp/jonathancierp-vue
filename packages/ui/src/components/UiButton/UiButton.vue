<template>
	<button role="button" class="ui-button" :type="nativeType" :disabled="disabled" @click="onClick"
					:class="[typeClass, sizeClass, roundedClass, roundedFullClass, outlinedClass, flatClass, blockClass]"
	>
    <span class="ui-button__content" :class="[hideContentIfLoadingClass]">
      <slot/>
    </span>
		<span v-if="loading" class="ui-button__loading">
      <ui-progress-circular color="#FFF" indeterminate/>
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
				default: TYPE.DEFAULT,
				validator: (value: TYPE) => [TYPE.DEFAULT, TYPE.SUCCESS, TYPE.WARNING, TYPE.ERROR, TYPE.INFO].includes(value)
			},
			size: {
				type: String,
				default: SIZE.MD,
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
			disabled: {
				type: Boolean,
				default: false
			}
		},
		setup(props, { emit }) {
			/* Computed */
			const typeClass = computed(() => props.type ? `ui-button--${props.type}` : "")
			const sizeClass = computed(() => props.size ? `ui-button--${props.size}` : "")
			const roundedClass = computed(() => props.rounded ? "ui-button--rounded" : "")
			const roundedFullClass = computed(() => props.roundedFull ? "ui-button--rounded-full" : "")
			const outlinedClass = computed(() => props.outlined ? "`ui-button--outlined`" : "")
			const flatClass = computed(() => props.flat ? "ui-button--flat" : "")
			const blockClass = computed(() => props.block ? "ui-button--block" : "")
			const hideContentIfLoadingClass = computed(() => props.loading ? "ui-button__content--hidden" : "")

			/* Methods */
			const onClick = () => {
				if (!props.loading) {
					emit("click")
				}
			}

			return {
				/* Computed */
				typeClass,
				sizeClass,
				roundedClass,
				roundedFullClass,
				outlinedClass,
				flatClass,
				blockClass,
				hideContentIfLoadingClass,
				/* Methods */
				onClick
			}
		}
	})
</script>