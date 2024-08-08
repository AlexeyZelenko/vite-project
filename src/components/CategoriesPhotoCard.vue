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
			<h5
          class="card-title"
          style="color: #3f51b5"
      >
        {{ $t(`pictureTitle${categoryKey}`) }}
			</h5>
      <p>
        {{ $t(`pictureText${categoryKey}`) }}
      </p>
		</div>
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
              const a = props.picture.id
              return `./src/assets/img/categories/${a}.jpeg`
            })
            const pictureTitle = computed(() => {
                return props.picture.title
            })

            const pictureText = computed(() => {
              return props.picture.text
            })
            const categoryKey = computed(() => {
                return props.picture.id
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
