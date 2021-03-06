# 快速使用

请先[安装](#/doc/install)本组件库。

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import ViteUi from "vite-ui";
import "vite-ui/dist/lib/vite-ui.css";
const app = createApp(App);
app.use(ViteUi);
app.mount("#app");
```

### 按需引入

```javascript
import { vButton } from "vite-ui";
import "vite-ui/dist/lib/vite-ui.css";
```

完成引入就可以使用我提供的组件啦。

#### Vue 单文件组件

代码示例：

```html
<template>
  <v-button>按钮</v-button>
</template>
```

下一节：[Avatar 头像](#/doc/avatar)