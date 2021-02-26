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
        <h4 style="color: white">
          {{ $t('subtitle.value', { value: 'УСПЕШНЫЕ ПРОЕКТЫ СОЗДАЮТСЯ ТОЛЬКО КОМАНДОЙ' }) }}
        </h4>
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

  <div class="container">

    <router-view/>

  </div>

<!--  ФотоОбложка-->
  <div class="jumbotron">
    <div class="container">
      <h1>
        <h4 style="color: white">
          {{ $t('title.value', { value: 'КОМПАНИЯ-РАЗРАБОТЧИК ІТ ПРОДУКТОВ' }) }}
        </h4>
      </h1>
    </div>
  </div>

  <div class="services">
    <div class="container">
      <h2>Сервіси</h2>
      <div class="service">
        <i
            aria-hidden="true"
            class="fas fa-praying-hands fa-3x"
        ></i>
        <p>Виробництво</p>
      </div>
      <div class="service">
        <i aria-hidden="true"
           class="fas fa-bible fa-3x"
        ></i>
        <p>Навчання</p>
      </div>
      <div class="service">
        <i
            aria-hidden="true"
            class="fas fa-hands-helping fa-3x"
        ></i>
        <p>Підтримка</p>
      </div>
    </div>
  </div>
</template>

<script>
  import SwitchLanguage from '/@/components/SwitchLanguage.vue'
  export default {
    name: 'App',
    components: {
      SwitchLanguage
    },
  }
</script>

<style>
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

.services .fa {
  color: #979797;
  margin-bottom: 15px;
}
.services .fas {
  color: #979797;
  margin-bottom: 15px;
}
/* Media Queries */
@media (max-width: 767px) {
  .overlay_min {
    padding-top: 10%;
  }
  h1 {
    font-size: 30px;
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

</style>