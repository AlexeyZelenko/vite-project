<template>
  <div ref="el">
    <div
      class="sec-text"
    >
      <h3 class="sec-text__title">{{title}}</h3>
      <p class="sec-text__dsc">{{text}}</p>
      <a :href="link" target="_blank">
      <button type="button" class="btn btn-outline-primary">
        {{ $t('link.value', { value: '' }) }}
      </button>
      <router-link
          :to="{name: 'product', params: { title }}"
      >
        <button
            type="button"
            class="btn btn-outline-primary mx-2"
        >
          {{ $t('product.value', { value: '' }) }}
        </button>
      </router-link>
      </a>
    </div>
    <section
      ref="el"
      :class="isShown ? sectionClass : null"
    ></section>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import useIntersectionObserver from '../composables/useIntersectionObserver'

export default {
  name: 'CatalogItem',
  props: {
      index: {
          type: Number,
          required: true
      },
      data: {
          type: Object,
          required: true
      }
  },
  setup (props) {
    const el = ref(null)
    const { observe, unobserve, isShown } = useIntersectionObserver()

    const id = computed(
        () => props.data.id
    )

    const title = computed(
      () => props.data.title
    )

    const link = computed(
        () => props.data.link
    )
    const text = computed(
      () => props.data.text
    )
    const sectionClass = computed(
      () => props.data.sectionClass
    )

    onMounted(() => {
      observe(el.value)
    })

    onBeforeUnmount(() => {
      unobserve(el.value)
    })
    return {
      id,
      link,
      title,
      text,
      sectionClass,
      isShown,
      el
    }
  }
}
</script>

<style scoped>
  body {margin: 0;padding: 10px; font-family: sans-serif;color: #262626;}

  section {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }
  section.sec1 {
    background: url('../assets/images/picture1.png')  no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec2 {
    background: url('../assets/images/picture2.png') no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec3 {
    background: url('../assets/images/picture-3.png')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec4 {
    background: url('../assets/images/moby/moby-4.png')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec5 {
    background: url('../assets/images/picture-4.png')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec6 {
    background: url('../assets/images/kartinka.jpg')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec7 {
    background: url('../assets/images/kartinka.jpg')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec8 {
    background: url('../assets/images/kartinka.jpg')no-repeat center / cover;
    background-attachment: fixed;
  }
  section.sec9 {
    background: url('../assets/images/kartinka.jpg')no-repeat center / cover;
    background-attachment: fixed;
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

  @media (max-width: 767px){
    section {
      padding: 20px;
    }
    section.sec1 {
      background: url('../assets/images/moby/moby-2.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec2 {
      background: url('../assets/images/moby/moby-1.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec3 {
      background: url('../assets/images/moby/moby-3.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec4 {
      background: url('../assets/images/moby/moby-4.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec5 {
      background: url('../assets/images/moby/moby-5.png')no-repeat center;
      background-attachment: fixed;
    }

  }
  @media (max-width: 500px){
    section.sec2 {
      background: url('../assets/images/moby/moby-1.png')no-repeat  center;
      background-attachment: fixed;
    }
    section.sec1 {
      background: url('../assets/images/moby/moby-2.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec3 {
      background: url('../assets/images/moby/moby-3.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec4 {
      background: url('../assets/images/moby/moby-4.png')no-repeat center;
      background-attachment: fixed;
    }
    section.sec5 {
      background: url('../assets/images/moby/moby-5.png')no-repeat center;
      background-attachment: fixed;
    }
  }
</style>
