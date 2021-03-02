<template>
  <!--    ВидеоОбложка-->
  <div class="fullscreen-bg">
    <div class="overlay">
      <div
          class="overlay_min"
      >
        <SwitchLanguage />
        <h1>
          OUR TITLE
        </h1>
        <h4>
          {{ $t('title.value', { value: 'КОМПАНИЯ-РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
        </h4>
        <h5 style="color: white">
          {{ $t('subtitle.value', { value: 'УСПЕШНЫЕ ПРОЕКТЫ СОЗДАЮТСЯ ТОЛЬКО КОМАНДОЙ' }) }}
        </h5>
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
      <h1>
        <h4 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">
          {{ $t('title.value', { value: 'КОМПАНИЯ-РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
        </h4>
      </h1>
    </div>
  </div>

  <div class="container">

    <router-view/>

  </div>

  <!--  ФотоОбложка-->
<!--  <div class="jumbotron2">-->
<!--    <div class="container">-->
<!--      <h2 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">-->
<!--        {{ $t('technologies.value', { value: '' }) }}-->
<!--      </h2>-->
<!--    </div>-->
<!--  </div>-->


  <h2 style="color: white; text-shadow: 2px 2px 2px #0d0e0e">
    {{ $t('technologies.value', { value: '' }) }}
  </h2>
  <iframe
      src="https://alexeyzelenko.github.io/my-skills"
      width="100%"
      height="100%"
  ></iframe>

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
  import SwitchLanguage from '/@/components/SwitchLanguage.vue'
  export default {
    name: 'App',
    components: {
      SwitchLanguage,
      CatalogItem
    },
    data: () => ({
      sections: [
        {
          title: 'https://bv.ck.ua/',
          text: 'Сайт на Vue3 + TypeScript',
          sectionClass: 'sec1',
          seen: true
        },
        {
          title: 'https://nask.com.ua/',
          text:'Сайт построен на Vue2 используя NUXT',
          sectionClass: 'sec2',
          seen: true
        },
        {
          title: 'https://teploservis68.com.ua/',
          text: '',
          sectionClass: 'sec3',
          seen: false
        },
        {
          title: 'https://puh-g.ck.ua/',
          text: '',
          sectionClass: 'sec4',
          seen: false
        },
      ]
    }),
  }
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
.jumbotron {
  background-image: url(./assets/img/jumbotron.jpg);
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 250px;
  text-align: center;
  clear: both;
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