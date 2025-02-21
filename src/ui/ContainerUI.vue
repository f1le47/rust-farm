<script setup lang="ts">
import NavHeader from '@components/NavHeader.vue'
</script>

<template>
  <div class="container">
    <NavHeader />
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 1440px;
}
</style>
