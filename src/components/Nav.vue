<template>
  <nav
    class="right-5 lg:right-15 2xl:right-20 fixed top-1/4 flex flex-col bg-white dark:bg-black-dark board md:border-2 rounded-lg border-gray-100 dark:border-black-border text-xs overflow-hidden invisible lg:visible"
  >
    <a
      class="py-2 px-3 dark:hover:bg-gray-dark hover:bg-gray-200"
      v-for="item in items"
      :key="item.label"
      :href="toHref(item.label)"
      >{{ item.label }}</a
    >
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    items: {
      type: Object,
    },
  },
  setup() {
    const toHref = (label: string) => {
      return '#' + label
    }
    return { toHref }
  },
})
</script>
