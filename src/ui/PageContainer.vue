<script setup lang="ts">
import { computed, inject } from 'vue';
import ContainerUI from './ContainerUI.vue';
import { Providers } from '@/providers/types';
import type { IsPageTransit } from '@/providers/isPageTransit/isPageTransit';
import { TransitionDirection } from '@/providers/isPageTransit/types';

interface Props {
  title: string;
}

const { title } = defineProps<Props>()
const { isPageTransit, transitionDirection  } = inject(Providers.IsPageTransit) as IsPageTransit
const classes = computed(() => {
  return {
    [transitionDirection.value === TransitionDirection.Left ? 'slot-appearance-left' : 'slot-appearance-right']: !isPageTransit.value,
    "slot-transition-left": isPageTransit.value && (transitionDirection.value === TransitionDirection.Left),
    "slot-transition-right": isPageTransit.value && (transitionDirection.value === TransitionDirection.Right),
  }
})
</script>

<template>
  <main>
    <ContainerUI>
      <div class="page-container">
        <h1 class="title" :class="{ 'title-transition': isPageTransit }">{{ title }}</h1>
        <div class="slot-container" :class="classes">
          <slot></slot>
        </div>
      </div>
    </ContainerUI>
  </main>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  overflow: hidden;

  .title {
    @include font_title;
    text-align: center;
    transition: transform .5s;
    animation: appearance .5s;
  }
  .title-transition {
    transform: translateY(-100%);
  }

  .slot-container {
    transform: translateX(0);
    transition: transform .5s;
  }

  .slot-transition-left {
    transform: translateX(-100%);
  }
  .slot-transition-right {
    transform: translateX(100%);
  }

  .slot-appearance-left {
    animation: appearance_left .5s;
  }
  .slot-appearance-right {
    animation: appearance_right .5s;
  }
}

@keyframes appearance {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes appearance_left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes appearance_right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
