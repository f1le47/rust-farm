<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

const t = useTranslation().t
</script>

<template>
  <div class="in-dev-wrapper">
    <h2 class="title">{{ t("common.page under construction") }}</h2>
  </div>
</template>

<style scoped lang="scss">
.in-dev-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 512px;
  background-image: url("@assets/images/in-dev-bg.png");

  .title {
    @include font_in_dev;
  }
}
</style>
