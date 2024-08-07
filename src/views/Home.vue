<template>
  <!--  Фото с описанием-->
  <CatalogItem
      v-for="(product, i) in sections"
      :key="product.title"
      :index="i"
      :data="product"
  ></CatalogItem>
</template>

<script>
import CatalogItem from '/@/components/CatalogItem.vue'

export default {
  name: 'Home',
  components: {
    CatalogItem
  },
  data: () => ({
    sections: [
      {
        id: 1,
        title: 'bv.ck.ua',
        link: 'https://bv.ck.ua',
        text: 'Vue3, TypeScript, Firebase, Vuex, GoogleDisk, API Youtube, API Google Maps, собственные NPM',
        sectionClass: 'sec1',
        seen: true
      },
      {
        id: 2,
        title: 'nask.com.ua',
        link: 'https://nusk-9e136.firebaseapp.com/',
        text:'Vue2, Nuxt, Vuex, Video, Music',
        sectionClass: 'sec2',
        seen: true
      },
      {
        id: 3,
        title: 'teploservis68.com.ua',
        link: 'https://nuxt-shop-9842c.web.app/',
        text: 'Nuxt, Vue2, Firebase, Google Аналитика, Vuetify',
        sectionClass: 'sec3',
        seen: false
      },
      {
        id: 4,
        title: 'COMFORT.UA',
        link: 'https://prazdnik-37ddf.web.app/flat',
        sectionClass: 'sec4',
        seen: false
      },
      {
        id: 5,
        title: 'shop',
        link: 'https://online-shop-34af2.web.app/',
        text: 'Vue2, Firebase, Google Аналитика, Vuetify',
        sectionClass: 'sec5',
        seen: false
      },
    ]
  }),
}
</script>