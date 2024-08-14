
<template>
  <div class="v-person-list card overflow-x-auto" style="padding: 20px">
    <OrganizationChart :value="data" collapsible>
      <template #person="slotProps">
        <div class="v-person-list--block">
          <div class="v-person-list--block__item">
            <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
            <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
            <span>{{ slotProps.node.data.title }}</span>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
      </template>
    </OrganizationChart>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
  key: '0',
  type: 'person',
  styleClass: '!bg-indigo-100 text-black rounded-xl',
  data: {
    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    name: 'Amy Elsner',
    title: 'CEO'
  },
  children: [
    {
      key: '0_0',
      type: 'person',
      styleClass: '!bg-purple-100 text-black rounded-xl',
      data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
        name: 'Anna Fali',
        title: 'CMO'
      },
      children: [
        {
          label: 'Sales',
          styleClass: '!bg-purple-100 text-black rounded-xl !important'
        },
        {
          label: 'Marketing',
          styleClass: '!bg-purple-100 text-black rounded-xl'
        }
      ]
    },
    {
      key: '0_1',
      type: 'person',
      styleClass: '!bg-teal-100 text-black rounded-xl',
      data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
        name: 'Oleksii Zelenko',
        title: 'CTO'
      },
      children: [
        {
          label: 'Development',
          styleClass: '!bg-teal-100 text-black rounded-xl'
        },
        {
          label: 'UI/UX Design',
          styleClass: '!bg-teal-100 text-black rounded-xl'
        }
      ]
    }
  ]
});
</script>

<style scoped lang="scss">
.v-person-list {
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    &--block {
        display: flex;
        flex-direction: column;

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
}
</style>
