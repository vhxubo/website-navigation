<template>
  <div
    class="bg-white max-w-screen-lg mx-auto p-3 border-2 rounded-lg border-gray-100"
    :id="board?.title"
  >
    <p class="text-lg pb-2 pl-2">
      {{ board?.title }}
    </p>
    <div class="flex flex-wrap flex-shrink m-auto clear-both">
      <template v-for="item in board?.items" :key="item.title">
        <div
          class="shadow rounded-md px-6 py-3 m-2 cursor-pointer select-none hover:shadow-md"
          @click="openUrl(item.url)"
          :title="item?.desp"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    board: {
      type: Object,
    },
  },
  setup() {
    const openUrl = (url: string) => {
      window.open(url)
      console.log(url)
    }

    return { openUrl }
  },
})
</script>
