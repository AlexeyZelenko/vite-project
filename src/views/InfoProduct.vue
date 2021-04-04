<template>
  <div
      style="margin: 30px"
      class="list-group"
  >
    <router-link
        :to="{name: 'Home'}"
    >
      <button
          type="button"
          class="btn btn-outline-primary mx-2"
      >
        {{ $t('ButtonBack.value', { value: '' }) }}
      </button>
    </router-link>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{$route.params.title}}</h5>
        <small>Vue 3</small>
      </div>
      <p
          class="mb-1"
      >
        Выбрали Vue3, так ка очень хотелось обуздать новую технологию)
      </p>
      <small class="text-muted">В некоторых местах использоавли гремучую смесь Vue2 + Vue3</small>

    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>


    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>


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
}
</script>

<style scoped>

</style>