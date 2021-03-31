<template>
  <div
    class="bg-white max-w-screen-lg mx-auto p-3 border-2 rounded-lg border-gray-100"
    :id="board?.label"
  >
    <p class="text-lg pb-2 pl-2">
      {{ board?.label }}
    </p>
    <div class="flex flex-wrap flex-shrink m-auto clear-both">
      <!-- 在vue2中可以同时使用v-for和.native处理事件，在vue3中取消了原生后缀，可以将v-for移植到template中-->
      <template v-for="item in board?.items" :key="item.name">
        <div
          class="shadow rounded-md px-6 py-3 m-2 cursor-pointer select-none hover:shadow-md"
          @click="openUrl(item.url)"
          :title="item?.description"
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
    }

    return { openUrl }
  },
})
</script>
