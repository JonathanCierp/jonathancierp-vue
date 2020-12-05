<template>
	<svg class="ui-progress-circular"
			 viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
			 :style="[rotateStyle, sizeStyle, colorStyle]" :class="[indeterminateClass]">
		<circle fill="transparent" cx="45.714285714285715" cy="45.714285714285715" r="20" :stroke-width="widthStroke"
						stroke-dasharray="125.664" stroke-dashoffset="0" class="ui-progress-circular__underlay"></circle>
		<circle fill="transparent" cx="45.714285714285715" cy="45.714285714285715" r="20" :stroke-width="widthStroke"
						stroke-dasharray="125.664" :stroke-dashoffset="lengthStroke"
						class="ui-progress-circular__overlay"></circle>
	</svg>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue"

	export default defineComponent({
		name: "ui-progress-circular",
		props: {
			indeterminate: {
				type: Boolean,
				default: false
			},
			size: {
				type: [String, Number],
				default: 32
			},
			width: {
				type: [String, Number],
				default: 4
			},
			color: {
				type: String,
				default: "#6200EE"
			},
			value: {
				type: [String, Number],
				default: 50
			},
			rotate: {
				type: [String, Number],
				default: 270
			}
		},
		setup(props) {
			/* Computed */
			const sizeStyle = computed(() => {
				let styles = {
					width: null,
					height: null
				}
				let heigth = props.size
				if (typeof props.size !== "number" && props.size.indexOf("px") !== -1) {
					styles.width = props.size
					styles.height = heigth
				} else {
					styles.width = props.size + "px"
					styles.height = heigth + "px"
				}

				return styles
			})
			const colorStyle = computed(() => {
				return { color: props.color }
			})
			const indeterminateClass = computed(() => props.indeterminate ? "ui-progress-circular--indeterminate" : "")
			const widthStroke = computed(() => props.width / 0.719)
			const lengthStroke = computed(() => (125.664 - (125.664 * parseInt(props.value)) / 100) + "px")
			const rotateStyle = computed(() => {
				return { transform: `rotate(${props.indeterminate ? 0 : props.rotate}deg)` }
			})

			return {
				/* Computed */
				sizeStyle,
				colorStyle,
				indeterminateClass,
				widthStroke,
				lengthStroke,
				rotateStyle
			}
		}
	})
</script>