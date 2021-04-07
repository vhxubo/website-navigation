<template>
  <div
    class="bg-white dark:bg-black-dark max-w-screen-lg p-2 md:p-3 board md:border-2 rounded-lg border-gray-100 dark:border-black-border mx-1.5 md:mx-auto my-2.5 md:my-4"
    :id="board?.label"
  >
    <p class="text-base md:text-lg pb-1.5 md:pb-2 pl-1.5 md:pl-2">
      {{ board?.label }}
    </p>
    <div class="flex flex-wrap flex-shrink m-auto clear-both">
      <a
        v-for="item in board?.items"
        :key="item.name"
        class="shadow rounded-md px-4 md:px-6 py-2 md:py-3 m-1.5 md:m-2 cursor-pointer select-none hover:shadow-md dark:bg-gray-dark text-sm md:text-base"
        :href="item.url"
        _target="_blank"
        :title="item.description ? item.description : item.name"
      >
        {{ item.name }}
      </a>
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
})
</script>
