<template>
  <div ref="el">
    <div
      class="sec-text"
    >
      <h3 class="sec-text__title">{{title}}</h3>
      <p class="sec-text__dsc">{{text}}</p>
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
    data: Object
  },
  setup (props) {
    const el = ref(null)
    const { observe, unobserve, isShown } = useIntersectionObserver()
    const title = computed(
      () => props.data.title
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
  body {margin: 0;padding: 0;font-family: sans-serif;color: #262626;}

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
    background: url('../assets/images/kartinka.jpg')no-repeat center / cover;
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
    section.sec1 {
      background: url('../assets/images/moby/moby-2.png') center / cover;
      background-attachment: fixed;
    }
    section.sec2 {
      background: url('../assets/images/moby/moby-1.png') center / cover;
      background-attachment: fixed;
    }
    section.sec3 {
      background: url('../assets/images/moby/moby-3.png') center / cover;
      background-attachment: fixed;
    }
  }
  @media (max-width: 500px){
    section.sec2 {
      background: url('../assets/images/moby/moby-1.png')  center / cover;
      background-attachment: fixed;
    }
    section.sec1 {
      background: url('../assets/images/moby/moby-2.png') center / cover;
      background-attachment: fixed;
    }
    section.sec3 {
      background: url('../assets/images/moby/moby-3.png') center / cover;
      background-attachment: fixed;
    }
  }
</style>
