<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import useIntersectionObserver from '@/composables/useIntersectionObserver'
import ImageItem from '@/components/ImageItem.vue'

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

const { observe, unobserve } = useIntersectionObserver()

// Вычисляемые свойства для данных
const pictureImageCode = computed(() => {
  return new URL(`../assets/img/categories/${props.picture.id}.webp`, import.meta.url).href
})

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
      class="photo-card"
  >
    <div class="photo-card__image-wrapper">
      <ImageItem
          class="photo-card__image opacity"
          :source="pictureImageCode"
      />
    </div>

    <div class="photo-card__body">
      <h5 class="photo-card__title">
        {{ $t(`pictureTitle${categoryKey}`) }}
      </h5>
      <p class="photo-card__subtitle">
        {{ $t(`pictureText${categoryKey}`) }}
      </p>
      <p class="photo-card__description">
        {{ $t(`pictureDescription${categoryKey}`) }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  &__image-wrapper {
    position: relative;
    height: 0;
    padding-bottom: 66.67%; // 3:2 aspect ratio
    overflow: hidden;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__body {
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 8px;
    color: #3f51b5;
  }

  &__subtitle {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1em;
  }

  &__description {
    margin: 0;
    flex-grow: 1;
  }
}

// If opacity class is controlling image visibility or animations
.opacity {
  // Maintain any existing opacity behaviors
  transition: opacity 0.3s ease;
}
</style>