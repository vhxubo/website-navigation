# website-navigation

> 构建属于自己的网址导航

见过很多类型的导航，总觉得数据的定义与修改实在是过于麻烦，或者是需要后端的支持
该项目通过结合GitHub Action和Issues，将数据库的后端移植到了GitHub上面

~~可以选择通过[jsDelivr](https://www.jsdelivr.com/)加速对GitHub的访问（jsDelivr可能会有缓存）~~

PS: 在网络状况良好下，依旧建议使用GitHub RAW访问

将api地址替换为对应的接口便可，配套接口如下：

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
  "author": "vhxubo",
  "github": "https://github.com/vhxubo/websites",
  "updateTime": "2021-04-02T10:01:30+08:00",
  "list": [
    {
      "label": "学校相关",
      "items": [
        {
          "name": "教务网络管理系统",
          "url": "https://www.lit.edu.cn/jwc/jwwlglxt.htm",
          "description": "洛阳理工学院教务网络管理系统登录，可分别选择相应入口"
        },
        {
          "name": "毕业设计（论文）管理系统",
          "url": "http://lit.co.cnki.net",
          "description": "学生账号用户名为学号，密码为身份证号后八位"
        },
        {
          "name": "教务处",
          "url": "https://www.lit.edu.cn/jwc/",
          "description": "洛理教务在线"
        }
      ]
    },
    {
      "label": "文化娱乐",
      "items": [
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/",
          "description": "在 YouTube 上畅享您喜爱的视频和音乐，上传原创内容并与亲朋好友和全世界观众分享您的视频。"
        },
        {
          "name": "哔哩哔哩",
          "url": "https://www.bilibili.com/",
          "description": "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
        }
      ]
    },
    {
      "label": "编程相关",
      "items": [
        {
          "name": "力扣",
          "url": "https://leetcode-cn.com/problemset/all/",
          "description": "力扣 (LeetCode) 全球极客挚爱的技术成长平台"
        },
        {
          "name": "labuladong的算法小抄",
          "url": "https://labuladong.gitbook.io/algo/",
          "description": ""
        },
        {
          "name": "GitHub",
          "url": "https://github.com/",
          "description": "交友平台"
        }
      ]
    }
  ]
}
```
