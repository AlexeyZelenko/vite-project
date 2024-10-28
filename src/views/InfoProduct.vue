<template>
   <div
           style="margin: 30px"
           class="list-group py-4"
           v-for="info in itemInfoProduct"
           :key="info.id"
   >
      <router-link
              class="py-2"
              :to="{name: 'Home'}"
      >
         <button
                 type="button"
                 class="btn btn-outline-primary mx-2"
         >
            {{ $t('ButtonBack.value', {value: ''}) }}
         </button>
      </router-link>

      <!-- Название сайта -->
      <a class="list-group-item list-group-item-action active m-md-2" aria-current="true">
         <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ $route.params.title }}</h5>
         </div>
      </a>

      <!-- Описание сайта -->
      <div
              v-for="item in info.arrayInfo"
              :key="item.id"
      >
         <div class="d-flex w-100 justify-content-between m-md-2">
            <h5 class="mb-1">{{ item.name }}</h5>
            <small>{{ item.id }}</small>
         </div>
         <p class="mb-1">{{ item.description }}</p>
         <a :href="item.description2" target="_blank">
            <button
                    type="button"
                    class="btn btn-outline-primary m-2"
            >
               >>>
            </button>
         </a>
         <small class="text-muted m-md-2">{{ item.description2 }}</small>
      </div>
   </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
   name: 'InfoProduct',
   props: {
      title: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         sections: [
            {
               id: 1,
               title: 'bv.ck.ua',
               link: 'https://bv.ck.ua',
               text: 'Vue3, TypeScript, Firebase, Vuex, GoogleDisk, API Youtube, API Google Maps, NPM',
               sectionClass: 'sec1',
               seen: true,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'VUE3',
                     description: 'We chose Vue3 because we really wanted to master the new technology)',
                     description2: 'https://v3.vuejs.org/',
                  },
                  {
                     id: 2,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 3,
                     name: 'BOOTSTRAP',
                     description: 'Quickly design and customize responsive, mobile-first sites with Bootstrap, the world’s most popular open source toolkit, featuring Sass variables and mixins, a flexible grid system, extensive prebuilt components, and powerful JavaScript plugins.',
                     description2: 'https://getbootstrap.com/',
                  }
               ],
            },
            {
               id: 2,
               title: 'nask.com.ua',
               link: 'https://nask.com.ua',
               text: 'Vue2, Nuxt, Vuex, Video, Music',
               sectionClass: 'sec2',
               seen: true,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'VUE2',
                     description: 'Vue - fast, performant, and versatile.',
                     description2: 'https://v3.vuejs.org/',
                  },
                  {
                     id: 2,
                     name: 'NUXT',
                     description: 'Greatly helps with SEO. Search engine robots are delighted with it.',
                     description2: 'https://nuxtjs.org/',
                  },
                  {
                     id: 3,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 4,
                     name: 'VUETIFY',
                     description: 'Vuetify is a Vue UI library with beautifully handcrafted material components.',
                     description2: 'https://vuetifyjs.com',
                  }
               ],
            },
            {
               id: 3,
               title: 'teploservis68.com.ua',
               link: 'https://teploservis68.com.ua',
               text: 'Nuxt, Vue2, Firebase, Google Аналитика, Vuetify',
               sectionClass: 'sec3',
               seen: false,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'VUE2',
                     description: 'Vue - fast, performant, and versatile.',
                     description2: 'https://v3.vuejs.org/',
                  },
                  {
                     id: 2,
                     name: 'NUXT',
                     description: 'Greatly helps with SEO. Search engine robots are delighted with it.',
                     description2: 'https://ru.nuxtjs.org/',
                  },
                  {
                     id: 3,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 4,
                     name: 'VUETIFY',
                     description: 'Vuetify is a Vue UI library with beautifully handcrafted material components.',
                     description2: 'https://vuetifyjs.com',
                  }
               ],
            },
            {
               id: 4,
               title: 'SN GROUP',
               link: 'https://prazdnik-37ddf.web.app/',
               text: 'Vue3, Typescript, Firebase, Bootstrap, Tik Tok(Video)',
               sectionClass: 'sec4',
               seen: false,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'VUE3',
                     description: 'We chose Vue3 because we really wanted to master the new technology)',
                     description2: 'https://v3.vuejs.org/',
                  },
                  {
                     id: 2,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 3,
                     name: 'BOOTSTRAP',
                     description: 'Quickly design and customize responsive, mobile-first sites with Bootstrap, the world’s most popular open source toolkit, featuring Sass variables and mixins, a flexible grid system, extensive prebuilt components, and powerful JavaScript plugins.',
                     description2: 'https://getbootstrap.com/',
                  },
                  {
                     id: 4,
                     name: 'VITE',
                     description: 'Next generation frontend tooling',
                     description2: 'https://vitejs.dev/',
                  }
               ]
            },
            {
               id: 5,
               title: 'shop',
               link: 'https://online-shop-34af2.web.app/',
               text: 'Vue2, Firebase, Google Аналитика, Vuetify',
               sectionClass: 'sec5',
               seen: false,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'VUE2',
                     description: 'Vue - fast, performant, and versatile.',
                     description2: 'https://v3.vuejs.org/',
                  },
                  {
                     id: 2,
                     name: 'Google Analytics',
                     description: 'Google Analytics is your lifeblood. When an anomaly occurs or it goes down, you want to know immediately.',
                     description2: 'https://analytics.google.com/',
                  },
                  {
                     id: 3,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 4,
                     name: 'VUETIFY',
                     description: 'Vuetify is a Vue UI library with beautifully handcrafted material components.',
                     description2: 'https://vuetifyjs.com',
                  }
               ],
            },
            {
               id: 6,
               title: 'Worship',
               link: 'https://oleksandr-3787c.web.app/',
               text: 'Vue3, Nuxt, Firebase, Google Аналитика, Vuetify',
               sectionClass: 'sec5',
               seen: false,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'NUXT',
                     description: 'Nuxt - fast, performant, and versatile.',
                     description2: 'https://nuxtjs.org/',
                  },
                  {
                     id: 2,
                     name: 'Google Analytics',
                     description: 'Google Analytics is your lifeblood. When an anomaly occurs or it goes down, you want to know immediately.',
                     description2: 'https://analytics.google.com/',
                  },
                  {
                     id: 3,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 4,
                     name: 'VUETIFY',
                     description: 'Vuetify is a Vue UI library with beautifully handcrafted material components.',
                     description2: 'https://vuetifyjs.com/',
                  },
                  {
                     id: 5,
                     name: 'SASS',
                     description: 'Sass is a powerful CSS preprocessor that allows you to use variables, nested rules, and mixins.',
                     description2: 'https://sass-lang.com/',
                  },
                  {
                     id: 6,
                     name: 'VeeValidate',
                     description: 'VeeValidate is a library for form validation in Vue.',
                     description2: 'https://vee-validate.logaretm.com/',
                  },
                  {
                     id: 7,
                     name: 'TelegramBot',
                     description: `TelegramBot is a library for sending messages to Telegram.
                                 Google Cloud, Firebase, Express.js, Axios, Telegraf`,
                     description2: '@worship_blv_bot',
                  }
               ]
            },
            {
               id: 7,
               title: 'Learning words',
               link: 'https://batleground-oz.web.app/',
               text: 'Vue3, Nuxt, Firebase, Google Аналитика, Vuetify',
               sectionClass: 'sec5',
               seen: false,
               arrayInfo: [
                  {
                     id: 1,
                     name: 'NUXT',
                     description: 'Nuxt - fast, performant, and versatile.',
                     description2: 'https://nuxtjs.org/',
                  },
                  {
                     id: 2,
                     name: 'Google Analytics',
                     description: 'Google Analytics is your lifeblood. When an anomaly occurs or it goes down, you want to know immediately.',
                     description2: 'https://analytics.google.com/',
                  },
                  {
                     id: 3,
                     name: 'FIREBASE',
                     description: 'Firebase is a great technology from Google. It has many cool features, like a real-time database.',
                     description2: 'https://firebase.google.com/',
                  },
                  {
                     id: 4,
                     name: 'VUETIFY',
                     description: 'Vuetify is a Vue UI library with beautifully handcrafted material components.',
                     description2: 'https://vuetifyjs.com/',
                  },
                  {
                     id: 5,
                     name: 'SASS',
                     description: 'Sass is a powerful CSS preprocessor that allows you to use variables, nested rules, and mixins.',
                     description2: 'https://sass-lang.com/',
                  },
                  {
                     id: 6,
                     name: 'VeeValidate',
                     description: 'VeeValidate is a library for form validation in Vue.',
                     description2: 'https://vee-validate.logaretm.com/',
                  },
                  {
                     id: 7,
                     name: 'TelegramBot',
                     description: `TelegramBot is a library for sending messages to Telegram.
                                 Google Cloud, Firebase, Express.js, Axios, Telegraf`,
                     description2: '@worship_blv_bot',
                  }
               ]
            },
            {
               id: 8,
               title: 'My Dictionary',
               link: 'https://batleground-oz.web.app/',
               text: 'Vue3 + Vue Router + TypeScript + Electron, Node.js. + Vite + Supabase + OpenAI + Tailwind',
               sectionClass: 'sec6',
               arrayInfo: [
                  {
                     id: 1,
                     name: 'GitHub - Readme',
                     description2: 'https://github.com/AlexeyZelenko/electron_english/blob/main/README.md',
                  },
               ],
               seen: false
            },
            {
               id: 9,
               title: 'Recipe Search',
               link: 'https://main.d2pdc4k1nmqnb.amplifyapp.com/',
               text: 'Vue.js 3 with TypeScript, Tailwind CSS, AWS Amplify, Amazon DynamoDB, Amazon Cognito, DeepL API, Spoonacular API',
               sectionClass: 'sec6',
               arrayInfo: [
                  {
                     id: 1,
                     name: 'GitHub - Readme',
                     description2: 'https://github.com/AlexeyZelenko/Search-for-Recipes',
                  },
               ],
               seen: false
            },
         ]
      };
   },
   computed: {
      itemInfoProduct() {
         return this.sections.filter(item => item.title === this.title);
      }
   }
});
</script>
