![Argon](https://cdn.jsdelivr.net/gh/solstice23/cdn@master/argon_new_animate.svg)

# Hexo-Theme-Argon

[Argon-Theme](https://github.com/solstice23/argon-theme) 的 Hexo 移植版

# 关于

Hexo-Theme-Argon 移植自 WordPress 版 Argon 主题。

## 项目状态

目前没有精力维护移植版，只维护 Wordpress 版本。Wordpress 的新功能将不会来到 Hexo 版本，只进行必要的 BUG 修复。~~（很久没有使用 Hexo）~~

欢迎提交 Pull Request 贡献/移植新功能/修复 BUG。

# 使用

## 1. 安装并启用主题

1. 在 `Hexo 根目录/themes` 目录下 Clone 本 Repo。

```
git clone https://github.com/solstice23/hexo-theme-argon.git
```
安装 ejs 渲染器。

```
npm install hexo-renderer-ejs
```

2. 重命名 Clone 后的文件夹为 `argon`

3. 在 `Hexo 根目录/_config.yml` 中将 `theme` 项改为 `argon`

## 2. 修改主题配置

1. 将 `Hexo 根目录/themes/argon/_config.yml` 复制到 `Hexo 根目录/source/_data` 文件夹中，并重命名为 `argon.yml`

2. 修改复制后的配置文件

## 3. 配置搜索功能

1. 在 `Hexo 根目录/themes` 目录下执行

```
npm install hexo-generator-search --save
```

2. 在 `Hexo 根目录/_config.yml` 中添加选项

```
search:
  path: search.xml
  field: post
  content: true
```

# 更新

在 `Hexo 根目录/themes/argon` 目录中执行

```
git pull
```

# 文章内参数

Argon 支持给文章设定一些单独的参数，例如文章头图

| 参数名                   | 解释                               |
|--------------------------|-----------------------------------|
| thumbnail                | 文章头图地址                       |
| first_image_as_thumbnail | 该篇文章是否选用文中第一张图作为头图 |
| after_post               | 文末附加内容                       |
| excerpt                  | 文章自定义摘要                     |

# Hexo 版相比 Wordpress 版

+ 保留了 Wordpress 版的大部分特性
+ 相同的界面
+ 暂时不支持多语言（欢迎 PR）
+ 目前仅支持 Gitalk、giscus、waline 评论系统（欢迎 PR）

# Telegram 频道
[t.me/argontheme](https://t.me/argontheme)

自动推送更新消息以及其他关于 Argon 的消息

> Readme 待完善...

# 更新日志

## 20201031 v1.0.2
+ 新增不蒜子用于统计访问人次和文章阅读量
+ 再次修复 Page 生成问题
+ 更改高亮显示颜色为红色
+ 修复 Gitalk 评论不加载问题
+ 修复文章目录不能数字+标题的问题

## 20200908 v1.0.1
+ 修复搜索结果点击后不会关闭问题
+ 修复手机搜索按钮重复问题
+ 修复 Page 生成问题

## 20200905 v1.0.0
+ 增加文章自定义摘要
+ 支持 More 标签
+ 修复 Gitalk 边距问题

## 20200822 v1.0.0.beta
+ 最初版本
