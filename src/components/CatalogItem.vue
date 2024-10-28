<template>
  <div ref="containerEl">
    <div class="sec-text">
      <h3 class="sec-text__title">{{ title }}</h3>
      <p class="sec-text__dsc">{{ text }}</p>
      <a :href="link" target="_blank">
        <button type="button" class="btn btn-outline-primary">
          {{ $t ? $t('link.value', { value: '' }) : 'Link' }}
        </button>
      </a>
      <router-link :to="{ name: 'product', params: { title } }">
        <button type="button" class="btn btn-outline-primary mx-2">
          {{ $t ? $t('product.value', { value: '' }) : 'Product' }}
        </button>
      </router-link>
    </div>
    <section
        ref="sectionEl"
        :class="isShown ? sectionClass : null"
    ></section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRefs } from 'vue'
import useIntersectionObserver from '@/composables/useIntersectionObserver'

interface DataProps {
  id: string;
  title: string;
  link: string;
  text: string;
  sectionClass: string;
}

const props = defineProps<{ data: DataProps }>()

const containerEl = ref<HTMLElement | null>(null)
const sectionEl = ref<HTMLElement | null>(null)
const { observe, unobserve, isShown } = useIntersectionObserver()

const { id, title, link, text, sectionClass } = toRefs(props.data)

onMounted(() => {
  if (sectionEl.value) observe(sectionEl.value)
})

onBeforeUnmount(() => {
  if (sectionEl.value) unobserve(sectionEl.value)
})
</script>

<style scoped>
body {
  margin: 0;
  padding: 10px;
  font-family: sans-serif;
  color: #262626;
}

section {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sec1 { background-image: url('../assets/images/picture1.png');}
.sec2 { background-image: url('../assets/images/picture2.png');}
.sec3 { background-image: url('../assets/images/picture-3.png');}
.sec4 { background-image: url('../assets/images/moby/moby-7.png');}
.sec5 { background-image: url('../assets/images/picture-4.png');}
.sec6 { background-image: url('../assets/images/moby/moby-4.png');}
.sec7 { background-image: url('../assets/images/moby/moby-8.png');}
.sec8 { background-image: url('../assets/images/moby/moby-9.png');}
.sec9 { background-image: url('../assets/images/moby/moby-10.png');}
.sec10 {
  background-image: url('../assets/images/moby/moby-default.png');
}

.sec-text {
  padding: 4% 8%;
  height: auto;
}

.sec-text__title {
  margin: 0;
  padding: 0;
  font-size: 2em;
}

.sec-text__dsc {
  font-size: 1em;
}

@media (max-width: 767px) {
  section {
    padding: 20px;
  }

  .sec1 { background-image: url('../assets/images/moby/moby-2.png'); }
  .sec2 { background-image: url('../assets/images/moby/moby-1.png'); }
  .sec3 { background-image: url('../assets/images/moby/moby-3.png'); }
  .sec4 { background-image: url('../assets/images/moby/moby-4.png'); }
  .sec5 { background-image: url('../assets/images/moby/moby-5.png'); }
}

@media (max-width: 500px) {
  .sec1 { background-image: url('../assets/images/moby/moby-2.png'); }
  .sec2 { background-image: url('../assets/images/moby/moby-1.png'); }
  .sec3 { background-image: url('../assets/images/moby/moby-3.png'); }
  .sec4 { background-image: url('../assets/images/moby/moby-7.png'); }
  .sec5 { background-image: url('../assets/images/moby/moby-5.png'); }
  .sec6 { background-image: url('../assets/images/moby/moby-4.png'); }
  .sec7 { background-image: url('../assets/images/moby/moby-8.png'); }
  .sec8 { background-image: url('../assets/images/moby/moby-9.png'); }
  .sec9 { background-image: url('../assets/images/moby/moby-10.png'); }
}
</style>

