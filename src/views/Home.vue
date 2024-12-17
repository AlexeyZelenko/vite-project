<template>
   <!--  Фото с описанием-->
   <CatalogItem
           v-for="(product, i) in sections"
           :key="product.title"
           :index="i"
           :data="product"
   ></CatalogItem>
</template>

<script setup>
import CatalogItem from '@/components/CatalogItem.vue'
import {ref} from "vue";

const name = 'Home'
const sections = ref([
   {
      id: 1,
      title: 'Interview IT CRM',
      link: 'https://interview-infinity.web.app/',
      text: 'Vue3, TypeScript, Firebase, Pinia, ChatGPT',
      sectionClass: 'sec1',
      seen: true
   },
   {
      id: 2,
      title: 'IT Interview Practice with AI',
      link: 'https://playful-fairy-b32c38.netlify.app/',
      text: 'Vue3, TypeScript, API ChatGpt, Firebase, TailwindCSS, Vite, Pinia',
      sectionClass: 'sec2',
      seen: true
   },
   {
      id: 3,
      title: 'teploservis',
      link: 'https://nuxt-shop-9842c.web.app/',
      text: 'Nuxt, Vue2, Firebase, Google Аналитика, Vuetify',
      sectionClass: 'sec3',
      seen: false
   },
   {
      id: 4,
      title: 'SN GROUP',
      link: 'https://prazdnik-37ddf.web.app/',
      text: 'Vue3, Typescript, Firebase, Bootstrap, Tik Tok(Video)',
      sectionClass: 'sec4',
      seen: false
   },
   {
      id: 5,
      title: 'Shop',
      link: 'https://online-shop-34af2.web.app/',
      text: 'Vue2, Firebase, Google Аналитика, Vuetify',
      sectionClass: 'sec5',
      seen: false
   },
   {
      id: 6,
      title: 'Worship',
      link: 'https://oleksandr-3787c.web.app/',
      text: 'Vue3, Nuxt, Firebase, TelegramBot, Google Cloud, Vuetify',
      sectionClass: 'sec6',
      seen: false
   },
   {
      id: 7,
      title: 'Learning words',
      link: 'https://batleground-oz.web.app/',
      text: 'Vue3 + TypeScript + Vite + Pinia + Vitest + TailwindCSS + gitlab + Vue I18n + API(ChatGPT, Deepl)',
      sectionClass: 'sec7',
      seen: false
   },
   {
      id: 8,
      title: 'My Dictionary',
      link: 'https://electronenglishwords.web.app/',
      text: 'Vue3 + Vue Router + TypeScript + Electron, Node.js. + Vite + Supabase + OpenAI + Tailwind + Firebase Deploy + Lazyload',
      sectionClass: 'sec8',
      seen: false
   },
   {
      id: 9,
      title: 'Recipe Search',
      link: 'https://main.d2pdc4k1nmqnb.amplifyapp.com/',
      text: 'Vue.js 3 with TypeScript, Tailwind CSS, AWS Amplify, Amazon DynamoDB, Amazon Cognito, DeepL API, Spoonacular API',
      sectionClass: 'sec9',
      seen: false
   },
   {
      id: 10,
      title: 'BLV',
      link: 'https://bv.ck.ua',
      text: 'Vue3, TypeScript, Firebase, Vuex, GoogleDisk, API Youtube, API Google Maps, собственные NPM',
      sectionClass: 'sec10',
      seen: true
   },
   {
      id: 11,
      title: 'Generate Your Workout Plan and Nutrition Plan with AI',
      link: 'https://fitness-268b1.web.app/',
      text: 'Vue3, TypeScript, API ChatGpt, Firebase, TailwindCSS, Vite',
      sectionClass: 'sec11',
      seen: true
   },
])
</script>