<template>
  <div
      class="container"
      style="margin-top: 50px"
  >
    <div
        class="row row-cols-1 row-cols-md-2 g-4 "
        v-for="picture in arrayPictures"
        :key="picture.key"
        style="justify-content: center"
    >
      <div class="col p-4">
        <CategoriesPhotoCard :picture="picture"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, ref, reactive, computed } from "vue"
import CategoriesPhotoCard from '../components/CategoriesPhotoCard.vue'

export default defineComponent({
  name: 'Home',
  components: {
    CategoriesPhotoCard,
    // about: defineAsyncComponent(() => import("../views/About.vue")),
    // MyComponent:defineAsyncComponent(() => import("../views/AddPicture.vue"))
  },
  data: () => ({
  }),
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

    // db.collection('pictures').onSnapshot((snapshotChange) => {
    //   arrayPictures.value = []
    //
    //   snapshotChange.forEach((doc) => {
    //     arrayPictures.value.push({
    //       key: doc.id,
    //       title: doc.data().title,
    //       price: doc.data().price,
    //       image: doc.data().image,
    //       imageCode: doc.data().imageCode,
    //       description: doc.data().description,
    //     })
    //   })
    // })

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
})
</script>