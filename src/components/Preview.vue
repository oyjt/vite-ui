<template>
  <div class="preview-wrapper">
    <h2>
      {{ component.__sourceCodeTitle }}
      <v-button @click="hideCode" v-if="codeVisible">隐藏代码</v-button>
      <v-button @click="showCode" v-else>查看代码</v-button>
    </h2>
    <div class="preview-wrapper-component">
      <component :is="component" />
    </div>

    <div class="preview-wrapper-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
const props = defineProps({
  component: Object,
});

const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
const codeVisible = ref(false);
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.preview-wrapper {
  border: 1px solid $border-color;
  margin: 16px 0px 32px;
  min-width: 300px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: #fff;
    }
  }
}
</style>