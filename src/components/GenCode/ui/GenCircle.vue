<script setup lang="ts">
import { NegativeGens, PositiveGens, type Gen } from '@/stores/genetics/types';

interface Props {
  gen: Gen;
}

const { gen } = defineProps<Props>()

</script>

<template>
  <div class="circle" :class="gen in PositiveGens ? 'circle_positive' : gen in NegativeGens ? 'circle_negative' : 'circle_empty'">
    <span class="text">{{ gen }}</span>
  </div>
</template>

<style scoped lang="scss">
.circle {
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $light;
  border: 4px solid;
  border-radius: 50%;
  text-align: center;

  &_positive {
    background-color: $gen_positive;
    border-color: $gen_positive_border;
  }
  &_negative {
    background-color: $gen_negative;
    border-color: $gen_negative_border;
  }
  &_empty {
    background-color: $gen_empty;
    border-color: $gen_empty_border;
  }

  .text {
    width: 16px;
    font-family: 'Rubik';
    @include font_genetic;
  }
}
</style>
