<template>
  <!--    ВидеоОбложка-->
  <div class="fullscreen-bg">
    <div class="overlay">
      <div
          class="overlay_min"
      >
        <SwitchLanguage />
        <h1>
          INFINITE
        </h1>
        <h4>
          {{ $t('title.value', { value: 'КОМПАНИЯ-РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
        </h4>
        <h6
            style="color: white; margin-bottom: 50px"
        >
          {{ $t('subtitle.value', { value: 'УСПЕШНЫЕ ПРОЕКТЫ СОЗДАЮТСЯ ТОЛЬКО КОМАНДОЙ' }) }}
        </h6>
      </div>
    </div>
    <video
        loop=""
        muted=""
        autoplay=""
        class="fullscreen-bg__video"
    >
      <source
          src='./assets/video/picture.mp4'
          type="video/mp4"
      >
      <source
          src='./assets/video/picture.webm'
          type="video/webm"
      >
    </video>
  </div>

  <div class="services">
    <div class="container">
      <h2>
        {{ $t('Services.value', { value: 'Services' }) }}
      </h2>
      <div class="service">
        <img src="./assets/img/web-analytics-48.png" alt="">
        <p>
          {{ $t('ANALYTICS.value', { value: 'ANALYTICS' }) }}
        </p>
      </div>
      <div class="service">
        <img src="./assets/img/web-development-1-48.png" alt="">
        <p>
          {{ $t('DEVELOPMENT.value', { value: 'DEVELOPMENT' }) }}
        </p>
      </div>
      <div class="service">
        <img src="./assets/img/web-crawler-48.png" alt="">
        <p>
          {{ $t('CRAWLER.value', { value: 'DEVELOPMENT' }) }}
        </p>
      </div>
    </div>
  </div>

  <!--  ФотоОбложка-->
  <div class="jumbotron2">
    <div class="container">
      <h4 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">
        {{ $t('title.value', { value: 'КОМПАНИЯ-РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
      </h4>
    </div>
  </div>


<!--  Сервисы-->
  <div
      class="container"
      style="margin-top: 50px"
  >
    <div
        class="row row-cols-1 row-cols-md-2 g-4 "
        v-for="picture in arrayPictures"
        :key="picture.id"
        style="justify-content: center"
    >
      <div class="col p-4">
        <CategoriesPhotoCard :picture="picture"/>
      </div>
    </div>
  </div>

  <!--  ФотоОбложка-->
  <div class="jumbotron2">
    <div class="container">
      <h4 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">
        {{ $t('ourProducts.value', { value: '' }) }}
      </h4>
    </div>
  </div>

  <div class="container">

    <router-view/>

  </div>

    <ul class="nav justify-content-center align-items-center bg-dark" style="height: 100px">
        <li class="nav-item">
            <a
                class="nav-link active"
                aria-current="page"
                href="https://alexeyzelenko.github.io/my-skills"
                target="_blank"
            >{{ $t('technologies.value', { value: '' }) }}
            </a>
        </li>
    </ul>

</template>

<script>
import SwitchLanguage from '@/components/SwitchLanguage.vue'
import CategoriesPhotoCard from '@/components/CategoriesPhotoCard.vue'
import { defineComponent, ref, computed } from "vue"


export default defineComponent({
    name: 'App',
    components: {
      SwitchLanguage,
      CategoriesPhotoCard

    },
    setup () {
      const theme = ref({
        color: '#rrggbb'
      })
      const myColor = ref( '#2c790d')
      const colorBind = computed(() => myColor.value)

      const isShow = ref(false)
      const name = computed (() => isShow.value ? 'MyComponent' : '')


      const onClick = () => {
        isShow.value = !isShow.value;
      }
      const arrayPictures = ref([
        {
          id: '1',
          title: 'РАЗРАБОТКА САЙТОВ',
          imageCode: '1FmpsOEf2mYFSAHja3K6DAk0xmCaiu_24',
          text: 'Создание цифроввых продуктов'
        },
        {
          id: '2',
          title: 'ИНТЕРНЕТ-МАГАЗИНЫ',
          imageCode: '152LGxL6NQDEeL2_evXxzw1HFNa6i75aY',
          text: 'Создаем качественные, простые и сложные интернет-магазины'
        },
        {
          id: '3',
          title: 'WEB-ПРИЛОЖЕНИЕ',
          imageCode: '1hYtF25Z4YPllKqohh0-Ad5rmNVz_8fIt',
          text: 'Проэктирование и создание инструментов для бизнеса'
        }
      ])

      return {
        arrayPictures,
        onClick,
        name,
        isShow,
        myColor,
        colorBind,
        theme
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
    mounted() {
      console.log('App.vue mounted', this.arrayPictures)
    }
})
</script>

<style scoped>
.overlay {
  background: rgba(0,0,0,0.6);
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 4;
  text-align:center;
}
.overlay h1 {
  text-align:center;
  color:#fff;
  font-size: 45px;
  margin:10% 10%;
  text-shadow: 0 0 10px black;
}
.overlay h4 {
  text-align:center;
  color: #a08e8e;
  margin:10% 10%;
  text-shadow: 0 0 10px black;
}
iframe {
  width: 100%;
  height: 640px;
}
.fullscreen-bg {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  padding-top:45%;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
/* Services */
.services .service {
  width: 33.333333%;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  margin-bottom: 50px;
  box-sizing: border-box;
}

.services {
  padding-top: 50px;
  text-align: center;
}

.services p {
  color: #5c5858;
  margin-top: 15px;
}
.jumbotron2 {
  background-image: url(./assets/img/jumbotron2.jpg);
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 250px;
  text-align: center;
  clear: both;
}
/* Media Queries */
@media (max-width: 767px) {
  .overlay_min {
    padding-top: 0;
  }
  h1 {
    font-size: 30px;
  }
  h5 {
    font-size: 12px;
  }
  iframe {
    width: 100%;
    height: 400px;
  }
  .fullscreen-bg {
    height: 200px;
    background: url('./assets/titletelephone.jpg') center center / cover no-repeat;
    padding-top: 100%;
  }
  .fullscreen-bg__video {
    display: none;
  }
  .overlay h1 {
    text-align:center;
    color:#fff;
    font-size: 30px;
    margin:5% 5%;
    text-shadow: 0 0 10px black;
  }
}
@media (max-width: 575px) {
  .overlay_min {
    padding-top: 10%;
  }
  h1 {
    font-size: 25px;
  }
  h5 {
    font-size: 12px;
  }
  iframe {
    margin-top: 20%;
    width: 100%;
    height: 240px;
  }
  .services .service {
    width: 100%;
    float: none;
  }

  .blog .post {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

}

@media (min-width: 980px) {
    .overlay_min {
        padding-top: 0;
    }
}


</style>