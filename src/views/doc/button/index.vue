<template>
  <div class="button-doc-wrapper">
    <h1>Button 按钮</h1>
    <div class="preview-wrapper">
      <Preview :component="ButtonPreview1" />
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/avatar', name: 'Avatar 头像' }"
        :next="{ path: '/doc/icon', name: '图标 Icon' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import ButtonPreview1 from "./ButtonPreview1.preview.vue";
const propDoc = [
  [
    "theme",
    "类型",
    "string",
    "default / primary / info / success / warning / error",
    "default",
  ],
  ["dashed", "是否虚线为按钮", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
  ["round", "是否为圆角按钮", "boolean", "-", "false"],
  ["circle", "是否为圆形按钮", "boolean", "-", "false"],
  ["disabled", "是否禁用", "boolean", "-", "fasle"],
  ["loading", "是否显示加载中", "boolean", "-", "fasle"],
  ["icon-placement", "按钮中图标的位置", "string", "left / right", "left"],
];
const slotDoc = [
  ["default", "自定义默认内容"],
  ["icon", "按钮的图标"],
];
</script>

<style lang="scss">
.button-doc-wrapper {
  .v-button {
    margin-right: 8px;
    margin-top: 8px;
  }
}
</style>