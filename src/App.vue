<template>
  <!--    ВидеоОбложка-->
  <div class="fullscreen-bg">
    <div class="overlay">
      <div
          class="overlay_min"
      >
        <SwitchLanguage />
<!--        <h1>-->
<!--          INFINITE-->
<!--        </h1>-->
         <div class="avatar-block">
            <img
                 src="./assets/avatar.jpg"
                 alt="avatar"
                 class="avatar"
            />
         </div>
        <h4>
          {{ $t('title.value', { value: 'РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
        </h4>
<!--        <h5-->
<!--            style="color: white; margin-bottom: 50px"-->
<!--        >-->
<!--          {{ $t('subtitle.value', { value: 'УСПЕШНЫЕ ПРОЕКТЫ СОЗДАЮТСЯ ТОЛЬКО КОМАНДОЙ' }) }}-->
<!--        </h5>-->
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
        {{ $t('title.value', { value: 'РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
      </h4>
    </div>
  </div>


<!--  Сервисы-->
  <div class="gallery-container">
    <div
        v-for="picture in arrayPictures"
        :key="picture.id"
        class="gallery-item"
    >
      <div class="gallery-card-wrapper">
        <CategoriesPhotoCard :picture="picture" class="gallery-card"/>
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

  <h2 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">
    {{ $t('technologies.value', { value: '' }) }}
  </h2>
  <iframe
      src="https://alexeyzelenko.github.io/my-skills"
      width="100%"
      height="100%"
  ></iframe>


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
        },
         {
            id: '4',
            title: 'ОПТИМИЗАЦИЯ И ТЕСТИРОВАНИЕ',
            imageCode: '1FmpsOEf2mYFSAHja3K6DAk0xmCaiu_24',
            text: 'Производительность и надёжность проектов'
         },
         {
            id: '5',
            title: 'SEO ОПТИМИЗАЦИЯ',
            imageCode: '152LGxL6NQDEeL2_evXxzw1HFNa6i75aY',
            text: 'Увеличение видимости и аналитика'
         },
         {
             id: '6',
             title: 'ДИЗАЙН И ПРОТОТИПИРОВАНИЕ',
             imageCode: '1hYtF25Z4YPllKqohh0-Ad5rmNVz_8fIt',
             text: 'От идеи до воплощения'
         },
         {
             id: '7',
             title: 'ИНТЕГРАЦИЯ СЕРВИСОВ',
             imageCode: '1FmpsOEf2mYFSAHja3K6DAk0xmCaiu_24',
             text: 'Расширение функциональности'
         },
         {
             id: '8',
             title: 'УПРАВЛЕНИЕ ПРОЕКТАМИ',
             imageCode: '152LGxL6NQDEeL2_evXxzw1HFNa6i75aY',
             text: 'Организация и сотрудничество'
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
    }
})
</script>

<style scoped lang="scss">
.gallery {
  &-container {
    max-width: 1400px;
    margin: 50px auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  &-item {
    width: 25%;
    padding: 10px;
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 500px;

    // Mobile responsive breakpoints
    @media (max-width: 1024px) {
      width: 33.333%;
    }

    @media (max-width: 768px) {
      width: 50%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  &-card-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 570px;

    // Make sure images inside the card maintain consistent sizing
    ::v-deep img {
      width: 100%;
      height: 100%;
      object-fit: cover; // This ensures the images cover the area without distortion
      object-position: center;
    }
  }
}

.avatar-block {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    border: 5px solid #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background: #fff;
    z-index: 2;
    margin-top: 10px;
    margin-bottom: 50px;
}
.avatar {
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
}
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
    padding-top: 10%;
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
    padding-top: 30%;
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
</style>