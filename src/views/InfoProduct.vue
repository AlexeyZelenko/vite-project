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
        {{ $t('ButtonBack.value', { value: '' }) }}
      </button>
    </router-link>

<!--    Название сайта-->
    <a class="list-group-item list-group-item-action active m-md-2" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{$route.params.title}}</h5>
    </div>
    </a>

<!--    Описание сайта-->
    <div
        v-for="item in info.arrayInfo"
        :key="item"
    >
      <div
          class="d-flex w-100 justify-content-between m-md-2"
      >
        <h5 class="mb-1">{{item.name}}</h5>
        <small>{{item.id}}</small>
      </div>
      <p
          class="mb-1"
      >
        {{item.description}}
      </p>
      <a href="https://getbootstrap.com/">
      <button
          type="button"
          class="btn btn-outline-primary m-2"

      >
        >>>
      </button>
      </a>
      <small
          class="text-muted m-md-2"
      >
        {{item.description2}}
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "InfoProduct",
  props: {
    title: {
      type: String,
    }
  },
  data: () => ({
    sections: [
      {
        id: 1,
        title: 'bv.ck.ua',
        link: 'https://bv.ck.ua',
        text: 'Vue3, TypeScript, Firebase, Vuex, GoogleDisk, API Youtube, API Google Maps, собственные NPM',
        sectionClass: 'sec1',
        seen: true,
        arrayInfo: [
          {
            id: 1,
            name: 'VUE3',
            description: 'Выбрали Vue3, так ка очень хотелось обуздать новую технологию)',
            description2: 'https://v3.vuejs.org/',
          },
          {
            id: 2,
            name: 'FIREBASE',
            description: 'Firebase - прекрасная технология от Google. Очень много крутых фишек. Например база данных в реальгом времени.',
            description2: 'https://firebase.google.com/'
          },
          {
            id: 3,
            name: 'BOOTSTRAP',
            description: 'Быстро создавайте и настраивайте адаптивные сайты, ориентированные на мобильные устройства, с помощью Bootstrap, самого популярного в мире инструментария с открытым исходным кодом, включающего переменные и миксины Sass, гибкую сеточную систему, обширные готовые компоненты и мощные плагины JavaScript.\n' +
                '\n',
            description2: 'https://getbootstrap.com/'
          }
        ],
      },
      {
        id: 2,
        title: 'nask.com.ua',
        link: 'https://nask.com.ua',
        text:'Vue2, Nuxt, Vuex, Video, Music',
        sectionClass: 'sec2',
        seen: true,
        arrayInfo: [
          {
            id: 1,
            name: 'VUE2',
            description: 'Vue - шустрый, производительный, разносторонний.',
            description2: 'https://v3.vuejs.org/',
          },
          {
            id: 2,
            name: 'NUXT',
            description: 'Очень помогает SEO. Роботы, ищущие информацию в интернете, от него в восхищении.',
            description2: 'https://ru.nuxtjs.org/',
          },
          {
            id: 3,
            name: 'FIREBASE',
            description: 'Firebase - прекрасная технология от Google. Очень много крутых фишек. Например база данных в реальгом времени.',
            description2: 'https://firebase.google.com/'
          },
          {
            id: 4,
            name: 'VUETIFY',
            description: 'Vuetify - это библиотека пользовательского интерфейса Vue с красиво созданными вручную компонентами материалов.',
            description2: 'https://vuetifyjs.com'
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
            description: 'Vue - шустрый, производительный, разносторонний.',
            description2: 'https://v3.vuejs.org/',
          },
          {
            id: 2,
            name: 'NUXT',
            description: 'Очень помогает SEO. Роботы, ищущие информацию в интернете, от него в восхищении.',
            description2: 'https://ru.nuxtjs.org/',
          },
          {
            id: 3,
            name: 'FIREBASE',
            description: 'Firebase - прекрасная технология от Google. Очень много крутых фишек. Например база данных в реальгом времени.',
            description2: 'https://firebase.google.com/'
          },
          {
            id: 4,
            name: 'VUETIFY',
            description: 'Vuetify - это библиотека пользовательского интерфейса Vue с красиво созданными вручную компонентами материалов.',
            description2: 'https://vuetifyjs.com'
          }
        ],
      },
      {
        id: 4,
        title: 'puh-g.ck.ua',
        link: 'https://puh-g.ck.ua/',
        text: 'Vue3, Vite, Bootstrap',
        sectionClass: 'sec4',
        seen: false,
        arrayInfo: [
          {
            id: 1,
            name: 'VUE3',
            description: 'Выбрали Vue3, так ка очень хотелось обуздать новую технологию)',
            description2: 'https://v3.vuejs.org/',
          },
          {
            id: 2,
            name: 'FIREBASE',
            description: 'Firebase - прекрасная технология от Google. Очень много крутых фишек. Например база данных в реальгом времени.',
            description2: 'https://firebase.google.com/'
          },
          {
            id: 3,
            name: 'BOOTSTRAP',
            description: 'Быстро создавайте и настраивайте адаптивные сайты, ориентированные на мобильные устройства, с помощью Bootstrap, самого популярного в мире инструментария с открытым исходным кодом, включающего переменные и миксины Sass, гибкую сеточную систему, обширные готовые компоненты и мощные плагины JavaScript.\n' +
                '\n',
            description2: 'https://getbootstrap.com/'
          },
          {
            id: 4,
            name: 'VITE',
            description: 'Инструменты нового поколения для внешнего интерфейса',
            description2: 'https://vitejs.dev/'
          }
        ],
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
            description: 'Vue - шустрый, производительный, разносторонний.',
            description2: 'https://v3.vuejs.org/',
          },
          {
            id: 2,
            name: 'Google Аналитика',
            description: 'Google Analytics - ваша кровь. Когда возникает аномалия или она выходит из строя, вы хотите знать об этом немедленно.',
            description2: 'https://analytics.google.com/',
          },
          {
            id: 3,
            name: 'FIREBASE',
            description: 'Firebase - прекрасная технология от Google. Очень много крутых фишек. Например база данных в реальгом времени.',
            description2: 'https://firebase.google.com/'
          },
          {
            id: 4,
            name: 'VUETIFY',
            description: 'Vuetify - это библиотека пользовательского интерфейса Vue с красиво созданными вручную компонентами материалов.',
            description2: 'https://vuetifyjs.com'
          }
        ],
      },
    ]
  }),
  computed: {
    itemInfoProduct() {
      return this.sections.filter(item => item.title === this.title)

      }
  }
}
</script>

<style scoped>

</style>