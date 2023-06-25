# 小而美的工具库

### 变更日志

## 0.0.3 / 2023-6-25

- 新增 8 个日期函数
- 新增节流 防抖
- 新增 url 解析函数
- 新增字符串 6 个小函数

## 0.0.2 / 2023-6-4

- 实现 JavaScript 引用对象的深拷贝功能

## 0.0.1 / 2023-6-4

- 实现 JavaScript 引用对象的深拷贝功能
- 新增功能 B

### 使用者指南

通过 npm 下载安装代码

```bash
$ npm install --save xr-tools
```

如果你是 node 环境

```js
var { clone } = require('clone');

clone({ a: 1 });
```

如果你是 webpack 等环境

```js
import { clone } from 'xrTools';

clone({ a: 1 });
```

如果你是浏览器环境

```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
  xrTools.clone({ x: { a: 1 } }
</script>
```

### 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```
