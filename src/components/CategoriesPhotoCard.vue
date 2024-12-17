<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import useIntersectionObserver from '@/composables/useIntersectionObserver'
import ImageItem from '@/components/ImageItem.vue'

const name = 'CategoriesPhotoCard'

const { observe, unobserve } = useIntersectionObserver()

// Определяем интерфейс для данных
interface Picture {
  id: string;
  title: string;
  text: string;
}

// Определяем свойства компонента с типизацией
const props = defineProps<{ picture: Picture }>()

// Ссылки на элементы
const el = ref<HTMLElement | null>(null)

// Вычисляемые свойства для данных
const pictureImageCode = computed(() => {
  return new URL(`../assets/img/categories/${props.picture.id}.webp`, import.meta.url).href
})

const pictureTitle = computed(() => props.picture.title)

const pictureText = computed(() => props.picture.text)

const categoryKey = computed(() => props.picture.id)

onMounted(() => {
  if (el.value) {
    observe(el.value)
  }
})

onBeforeUnmount(() => {
  if (el.value) {
    unobserve(el.value)
  }
})
</script>

<template>
	<div
			ref="el"
			class="card"
	>
		<ImageItem
			class="opacity"
			:source="pictureImageCode"
		/>

		<div class="card-body">
			<h5
                class="card-title"
                style="color: #3f51b5"
            >
              {{ $t(`pictureTitle${categoryKey}`) }}
			</h5>
            <p style="font-weight: bold">
              {{ $t(`pictureText${categoryKey}`) }}
            </p>
            <p>
              {{ $t(`pictureDescription${categoryKey}`) }}
            </p>
		</div>
	</div>
</template>