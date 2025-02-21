<script setup lang="ts">
interface Props {
  link: Paths
  text: string
}
import type { Paths } from '@/router/types'
import { RouterLink } from 'vue-router'
import RightArrow from '@assets/icons/rightArrow.svg?component'

const { link, text } = defineProps<Props>()
</script>

<template>
  <RouterLink :to="link">
    <div class="wrapper">
      <button class="button">{{ text }}</button>
      <RightArrow class="icon" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  padding: 8px 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: $primary;
  overflow: hidden;
  &:after {
    content: '';
    left: -100%;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $primary-hover;
    transition: left 0.3s ease;
  }
  &:hover:after {
    left: 0;
  }

  .button {
    font-family: 'BebasNeue';
    @include font_l;
    color: $primary-text;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 2;
  }

  .icon {
    color: $primary-text;
    z-index: 2;
  }
}
</style>
