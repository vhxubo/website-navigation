# website-navigation

> 构建属于自己的网址导航

见过很多类型的导航，总觉得数据的定义与修改实在是过于麻烦，或者是需要后端的支持。
该项目通过结合GitHub Action和Issues，将数据库的后端移植到了GitHub上面，并通过[jsDelivr](https://www.jsdelivr.com/)加速对GitHub的访问（jsDelivr可能会有缓存）。

项目后端地址：[vhxubo/websites](https://github.com/vhxubo/websites)

## 介绍

### 技术栈

- Vue3
- TypeScript
- Vite
- tailwindcss

### 功能

- 可配合[vhxubo/websites](https://github.com/vhxubo/websites)使用，使用GitHub Issues作为后端
- 黑暗模式
- 一键返回顶部

## 如何构建

建议将`App.vue`中的api地址修改为自己的

```bash
yarn
yarn dev
yarn build
```

因为我在`vhxubo.github.io`上部署过GitHub Page，因此我在[build.yml](github\workflows\build.yml)中对html内的文件路径进行了修改，否则不能正常的访问页面

如果你在`[username].github.io`下部署，则需要将[build.yml](github\workflows\build.yml)中的以下代码删除

```yml
- name: Fix path
  run: |
    sed -i 's/\/assets\//\/website-navigation\/assets\//g' dist/index.html
    sed -i 's/\/favicon.ico/\/website-navigation\/favicon.ico/g' dist/index.html
```

## TODO

- 优化一键返回顶部动画
- 优化黑暗模式

## 数据定义

```json
{
  "author": "vhxubo", // 作者
  "updateTime": "2021-03-31T17:43:54+08:00", // 更新时间
  "list": [
    {
      "label": "前端", // 标签，分组的标题
      "items": [
        {
          "name": "h5bp/html5-boilerplate: A professional front-end template for building fast, robust, and adaptable web apps or sites.",
          "url": "https://github.com/h5bp/html5-boilerplate",
          "description": "框架"
        },
        {
          "name": "FullHuman/purgecss: Remove unused CSS",
          "url": "https://github.com/FullHuman/purgecss",
          "description": "清理无用的 CSS"
        }
      ]
    },
    {
      "label": "工具",
      "items": [
        {
          "name": "h5bp/html5-boilerplate: A professional front-end template for building fast, robust, and adaptable web apps or sites.",
          "url": "https://github.com/h5bp/html5-boilerplate",
          "description": "框架"
        },
        {
          "name": "FullHuman/purgecss: Remove unused CSS",
          "url": "https://github.com/FullHuman/purgecss",
          "description": "清理无用的 CSS"
        }
      ]
    }
  ]
}
```
