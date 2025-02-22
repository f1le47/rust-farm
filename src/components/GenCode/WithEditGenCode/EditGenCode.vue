<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import { type GeneticCode, PositiveGens, NegativeGens } from '@/stores/genetics/types';
import { fillEmptyGens, withoutEmptyGens } from '../utils';
import { MAX_GENS_IN_CODE } from '@/stores/genetics/consts';

interface Props {
  genCode: GeneticCode
}
interface Emits {
  (e: 'handleBlur', genCode: GeneticCode): void
  (e: 'handleChange', value: string): void
}

const { genCode } = defineProps<Props>()
const emit = defineEmits<Emits>()

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')
const input = ref<GeneticCode>(withoutEmptyGens(genCode))

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const uppered = target.value.toUpperCase()

  input.value = uppered
  emit('handleChange', uppered)
}
const handleKeyPress = (e: KeyboardEvent) => {
  const key = e.key.toUpperCase()
  if (key === "ENTER") {
    handleBlur()
    return
  }

  const invalidForMaxLength = input.value.length >= MAX_GENS_IN_CODE
  const invalidForGen = !(key in PositiveGens || key in NegativeGens)
  if (invalidForMaxLength || invalidForGen) e.preventDefault()
}
const handleBlur = () => {
  emit("handleBlur", fillEmptyGens(input.value))
}

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div class="wrapper">
    <div class="input-container">
      <input ref="inputRef" class="input" type="text" :value="input" @input="handleChange" @keypress="handleKeyPress" @blur="handleBlur">
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 8px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  background-color: $dark;
  border: 4px solid $primary-text;
  border-radius: 32px;

  .input-container {
    display: flex;
    align-items: center;
    width: 280px;
    height: 40px;

    .input {
      padding: 8px 8px;
      width: 265px;
      @include font_genetic;
      background-color: transparent;
      border: none;
      border-radius: 32px;
      letter-spacing: 24px;
    }
  }
}
</style>
