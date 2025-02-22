<script setup lang="ts">
import type { GeneticCode } from '@/stores/genetics/types';
import GenCode from '../ui/GenCode.vue';
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import EditGenCode from './EditGenCode.vue';
import SubmitButton from '@assets/icons/submit.svg?component'
import { MAX_GENS_IN_CODE } from '@/stores/genetics/consts';
import { withoutEmptyGens } from '../utils';

interface Props {
  genCode: GeneticCode;
  canBeSubmit?: boolean;
}
interface Emits {
  (e: 'onChangeGenCode', genCode: GeneticCode): void
  (e: 'onSubmitGenCode', genCode: GeneticCode): void
}

const { genCode, canBeSubmit = false } = defineProps<Props>()
const emit = defineEmits<Emits>()

const isEdit = ref<boolean>(false)
const currentInput = ref<string>(genCode)
const handleChange = (value: string) => {
  currentInput.value = value;
}
const handleOnEdit = () => {
  isEdit.value = true
}
const handleOffEdit = (genCode: GeneticCode) => {
  emit('onChangeGenCode', genCode)
  isEdit.value = false
}
const handleSubmit = () => {
  emit("onSubmitGenCode", genCode)
}
const canAddGenCode = computed(() => {
  return withoutEmptyGens(currentInput.value).length === MAX_GENS_IN_CODE
})

watchEffect(() => currentInput.value = genCode)

const handleKey = (e: KeyboardEvent) => {
  if (!canBeSubmit || !canAddGenCode.value) return
  if (e.key === "Enter") {
    handleSubmit()
  }
}
onMounted(() => {
  document.addEventListener("keypress", handleKey)
})
onUnmounted(() => {
  document.removeEventListener("keypress", handleKey)
})
</script>

<template>
  <div class="container">
    <div class="box">
      <EditGenCode v-if="isEdit" :gen-code="genCode" @handle-blur="handleOffEdit" @handle-change="handleChange" />
      <GenCode v-else :gen-code="genCode" @click="handleOnEdit" />
    </div>
    <div v-if="canBeSubmit" class="button-wrapper" :class="{ active: canAddGenCode }" @click="handleSubmit">
      <SubmitButton class="submit-button" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  .box {
    position: relative;
    z-index: 2;
  }

  .button-wrapper {
    margin-left: 8px;
    padding: 2px;
    position: absolute;
    left: 100%;
    width: 28px;
    height: 28px;
    background-color: $primary-text;
    border-radius: 50%;
    transform: translateX(-48px);
    transition: transform .3s ease;

    .submit-button {
      position: relative;
      left: 1px;
      fill: $dark;
    }
  }
  .active {
      transform: translateX(0);
    }
}
</style>
