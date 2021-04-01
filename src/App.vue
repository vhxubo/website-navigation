<template>
  <header
    class="select-none flex h-16 bg-white dark:bg-gray-800 px-8 justify-between items-center border-gray-200 dark:border-gray-900 border-b text-gray-700 dark:text-gray-300"
  >
    <div class="text-2xl font-semibold tracking-wide">🐚网址导航</div>
    <div class="flex items-center">
      <span>
        <a href="http://github.com/vhxubo/website-navigation">
          <!-- 在这里使用v-show代表着第一次就将两个图标都进行加载，避免了使用v-if或者在src进行赋值造成的图片切换不及时的问题 -->
          <img
            v-show="mode === 'dark'"
            width="32"
            src="/src/assets/GitHub-Mark-Light-32px.png"
            alt="github"
          />
          <img
            v-show="mode === 'light'"
            width="32"
            src="/src/assets/GitHub-Mark-32px.png"
            alt="github"
          />
        </a>
      </span>
      <span
        class="flex bg-gray-300 dark:bg-gray-700 bg-opacity-50 rounded-full cursor-pointer ring-2 ring-current ml-4"
        @click="changeMode"
      >
        <div class="m-0.5">
          {{ mode === 'light' ? '☀' : '&nbsp;&nbsp;&nbsp;&nbsp;' }}
        </div>

        <div class="m-0.5">
          {{ mode === 'dark' ? '🌙' : '&nbsp;&nbsp;&nbsp;&nbsp;' }}
        </div>
      </span>
    </div>
  </header>
  <template v-for="item in urlsData?.list" :key="item.label">
    <Board :board="item" class="m-4" />
  </template>
  <footer class="text-center py-4">
    <div class="text-sm mb-2">
      UpdateTime:
      {{ urlsData.updateTime }}
      From: {{ urlsData.author }}
    </div>
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
    const urlsData = reactive({ list: [], updateTime: '', author: '' })
    const api = 'https://cdn.jsdelivr.net/gh/vhxubo/websites/api/urls.json'

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

    const mode = ref<string>('light')

    onMounted(async () => {
      // 监听页面滚动事件，why need true？
      window.addEventListener('scroll', handleScroll, true)

      const { data } = await Axios.get(api)
      urlsData.list = data.list
      urlsData.updateTime = data.updateTime
      urlsData.author = data.author
      console.log(urlsData)

      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        mode.value = 'dark'
        document.querySelector('html')!.classList.add('dark')
      } else {
        mode.value = 'light'
        document.querySelector('html')!.classList.remove('dark')
      }
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const changeMode = () => {
      if (localStorage.theme == 'dark') {
        localStorage.theme = 'light'
        mode.value = 'light'
        document.querySelector('html')!.classList.remove('dark')
      } else {
        localStorage.theme = 'dark'
        mode.value = 'dark'
        document.querySelector('html')!.classList.add('dark')
      }
    }

    return { toTop, show, urlsData, changeMode, mode }
  },
})
</script>

<style>
* {
  box-sizing: border-box;
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
