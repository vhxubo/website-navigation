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
  <transition name="fade">
    <button
      class="z-10 fixed bottom-4 right-4 rounded-full text-2xl text-white"
      v-if="show"
      @click="toTop"
    >
      🔝
    </button>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue'
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

    const show = ref<Boolean>(false)
    const toTop = () => {
      //todo 返回到顶部动画优化
      window.scroll(0, 0)
    }

    const handleScroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 300) {
        show.value = true
      } else {
        show.value = false
      }
    }

    onMounted(() => {
      // 监听页面滚动事件，why need true？
      window.addEventListener('scroll', handleScroll, true)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { board, toTop, show }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
