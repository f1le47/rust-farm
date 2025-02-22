<script setup lang="ts">
import type { Gen, GeneticCode } from '@/stores/genetics/types';
import GenCircle from './GenCircle.vue';

interface Props {
  genCode: GeneticCode;
}

const { genCode } = defineProps<Props>()

</script>

<template>
  <div class="container">
    <GenCircle v-for="gen in genCode" :key="gen" :gen="gen as Gen" />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 8px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  background-color: $dark;
  border: 4px solid $primary-text;
  border-radius: 32px;
}
</style>
