<template>
  <header
    class="select-none flex h-12 md:h-16 bg-white dark:bg-gray-800 px-2 md:px-8 justify-between items-center border-gray-200 dark:border-gray-900 border-b text-gray-700 dark:text-gray-300"
  >
    <div class="text-lg md:text-2xl font-semibold tracking-wide">
      🐚网址导航
    </div>
    <div class="flex items-center">
      <span>
        <a href="http://github.com/vhxubo/website-navigation">
          <!-- 在这里使用v-show代表着第一次就将两个图标都进行加载，避免了使用v-if或者在src进行赋值造成的图片切换不及时的问题 -->
          <img
            v-show="mode === 'dark'"
            class="w-6 md:w-7"
            src="/src/assets/GitHub-Mark-Light-32px.png"
            alt="github"
          />
          <img
            v-show="mode === 'light'"
            class="w-6 md:w-7"
            src="/src/assets/GitHub-Mark-32px.png"
            alt="github"
          />
        </a>
      </span>
      <span
        class="flex bg-gray-300 dark:bg-gray-700 bg-opacity-50 rounded-full cursor-pointer ring-2 ring-current ml-2 md:ml-4 text-xs md:text-base"
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
    <Board :board="item" />
  </template>
  <footer class="text-center py-4 text-xs md:text-sm">
    <div class="mb-1 md:mb-2">
      UpdateTime:
      {{ urlsData.updateTime }}
      From: {{ urlsData.author }}
    </div>
    Create by <a href="https://github.com/vhxubo">vhxubo</a> ❤️
  </footer>
  <transition name="fade">
    <button
      class="z-10 fixed bottom-4 right-4 rounded-full text-4xl text-white"
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
import Axios, { AxiosResponse } from 'axios'

interface UrlsData {
  list: Array<object>
  updateTime: string
  author?: string
  github?: string
}

const isFilled = <T extends {}>(
  v: PromiseSettledResult<T>
): v is PromiseFulfilledResult<T> => v.status === 'fulfilled'

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
  setup() {
    // 不能使用let，欸，不知道为啥有人会用let
    const urlsData = reactive<UrlsData>({
      list: [],
      updateTime: '',
      author: '',
    })

    const setData = ({ list, updateTime, author }: UrlsData) => {
      urlsData.list = list
      urlsData.updateTime = updateTime
      urlsData.author = author
      console.log(urlsData)
    }

    // 仓库名
    const repository = 'vhxubo/websites'
    const time = new Date().getTime()
    const promises: Promise<AxiosResponse<any>>[] = []
    promises.push(
      Axios.get(
        `https://raw.githubusercontent.com/${repository}/master/api/urls.json?t=${time}`
      )
    )
    promises.push(
      Axios.get(
        `https://cdn.jsdelivr.net/gh/${repository}/api/urls.json?t=${time}`
      )
    )

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

      const results = await Promise.allSettled(promises)

      const successRes = results.filter(p => p.status === 'fulfilled')

      // https://stackoverflow.com/questions/63119998/unable-to-get-the-value-from-promise-allsettled-in-nodejs-12-with-typescript-3-8

      switch (successRes.length) {
        case 0:
          alert('接口访问错误！请检查您的网络')
          break
        case 1:
          setData(
            (successRes[0] as PromiseFulfilledResult<AxiosResponse<any>>).value
              .data
          )
          break
        default:
          // 根据updateTime逆序排列
          const sortRes = successRes.sort((a, b) => {
            return (
              Number(new Date(isFilled(b) ? b.value.data.updateTime : 0)) -
              Number(new Date(isFilled(a) ? a.value.data.updateTime : 0))
            )
          })
          // 将最新更新的数据进行分配
          setData(
            (sortRes[0] as PromiseFulfilledResult<AxiosResponse<any>>).value
              .data
          )
      }
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

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
