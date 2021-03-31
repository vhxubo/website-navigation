<template>
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <Board :board="board" class="m-4" />
  <footer class="text-center py-4">
    Create by <a href="https://github.com/vhxubo">vhxubo</a> ❤️
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Board from './components/Board.vue'

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
  setup() {
    const board = reactive({
      title: '校内网站',
      items: [
        { url: 'http://www.baicu.com', name: '教务处' },
        { url: 'http://www.baicu.com', name: '课程表' },
        { url: 'http://www.baicu.com', name: '慕课网站' },
        { url: 'http://www.baicu.com', name: '知网' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
        { url: 'http://www.baicu.com', name: 'baidu' },
      ],
    })
    return { board }
  },
})
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}
</style>
