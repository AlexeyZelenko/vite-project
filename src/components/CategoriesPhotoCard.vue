<template>
	<div
			ref="el"
			class="card"
	>
		<ImageItem
			class="opacity"
			v-if="isShown"
			:source="pictureImageCode"
		/>

		<div class="card-body">
			<h5 class="card-title">
				{{pictureTitle}}
			</h5>
      <p>
        {{pictureText}}
      </p>
		</div>
<!--		<router-link-->
<!--				style="margin-bottom: 10px;"-->
<!--				:to="{ name: 'edit_picture', params: { id: picture.key }}"-->
<!--		>-->
<!--			<button-->
<!--					type="button"-->
<!--					class="btn btn-outline-success"-->
<!--			>-->
<!--				{{ $t('more_details.value', { value: 'детальніше' }) }}-->
<!--			</button>-->
<!--		</router-link>-->
	</div>
</template>

<script>
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
    import useIntersectionObserver from '../composables/useIntersectionObserver'
    import ImageItem from '../components/ImageItem.vue'

    export default {
        name: 'CategoriesPhotoCard',
        props: {
            picture: Object
        },
				components: {
            ImageItem
				},
        setup (props) {
            const photo = ref({})
            const el = ref(null)
            const { observe, unobserve, isShown } = useIntersectionObserver()

            const pictureImageCode = computed(() => {
                const a = props.picture.imageCode
								return `https://drive.google.com/uc?export=view&id=${a}`
            })
            const pictureTitle = computed(() => {
                return props.picture.title
            })

            const pictureText = computed(() => {
              return props.picture.text
            })
            const categoryKey = computed(() => {
                return props.picture.key
            })

            onMounted(() => {
                observe(el.value)
            })

            onBeforeUnmount(() => {
                unobserve(el.value)
            })
            return {
                pictureImageCode,
                el,
                isShown,
                pictureTitle,
                pictureText,
                photo,
                categoryKey
            }
        }
    }
</script>
