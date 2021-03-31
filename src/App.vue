<template>
  <template v-for="item in urlsData?.list" :key="item.label">
    <Board :board="item" class="m-4" />
  </template>
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
import Axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
  setup() {
    // 不能使用let，欸，不知道为啥有人会用let
    const urlsData = reactive({ list: [] })
    const api = 'https://cdn.jsdelivr.net/gh/vhxubo/websites/urls.json'

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

    onMounted(async () => {
      // 监听页面滚动事件，why need true？
      window.addEventListener('scroll', handleScroll, true)

      const { data } = await Axios.get(api)
      urlsData.list = data.list
      console.log(urlsData)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { toTop, show, urlsData }
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
