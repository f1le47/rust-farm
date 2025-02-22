<script setup lang="ts">
import ContainerUI from './ContainerUI.vue';

interface Props {
  title: string;
}

const { title } = defineProps<Props>()
</script>

<template>
  <main>
    <ContainerUI>
      <div class="page-container">
        <h1 class="title">{{ title }}</h1>
        <slot></slot>
      </div>
    </ContainerUI>
  </main>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  .title {
    @include font_title;
    text-align: center;
  }
}
</style>
