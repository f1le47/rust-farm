<script setup lang="ts">
import type { GeneticCode } from '@/stores/genetics/types';
import GenCode from '../ui/GenCode.vue';
import { GEN_CODES_GAP, MAX_GEN_CODES_SHOWN } from './consts';
import { GEN_CODE_HEIGHT } from '../ui/consts';

interface Props {
  genCodes: GeneticCode[]
}
interface Emits {
  (e: 'removeGenCode', index: number): void
}

const { genCodes } = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleRemove = (index: number) => emit('removeGenCode', index)

const ROW_GAP = GEN_CODES_GAP + "px"
const HEIGHT = MAX_GEN_CODES_SHOWN * GEN_CODE_HEIGHT + GEN_CODES_GAP * MAX_GEN_CODES_SHOWN + "px"
</script>

<template>
  <div class="container">
    <div class="gen-codes" :style="{ height: HEIGHT, rowGap: ROW_GAP }">
      <div class="gen-code" v-for="(genCode, index) in genCodes" :key="genCode + index" @click="handleRemove(index)">
        <GenCode :gen-code="genCode" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .gen-codes {
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-color: $dark $primary-text;
    scrollbar-width: thin;

    .gen-code {
      position: relative;

      &:hover::after {
        opacity: 1;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border: 4px solid $primary-text;
        border-radius: 32px;
        background-color: rgba($error, 0.9);
        background-image: url("@assets/icons/trash.svg");
        background-position: center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        cursor: pointer;
        transition: opacity 0.3s ease-out;
      }
    }
  }
}
</style>
