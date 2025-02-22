<script setup lang="ts">
import { PAGE_TRANSITION_IN_MS } from '@/providers/isPageTransit/consts';
import type { IsPageTransit } from '@/providers/isPageTransit/isPageTransit';
import { Providers } from '@/providers/types';
import router from '@/router';
import type { Paths } from '@/router/types';
import { computed, inject } from 'vue';

interface Props {
  to: Paths;
  activeClass?: string;
}

const { to, activeClass } = defineProps<Props>()
const { setIsPageTransit, computeTransitionDirection } = inject(Providers.IsPageTransit) as IsPageTransit

const isActive = computed(() => router.currentRoute.value.path === to)

const handleClick = () => {
  if (isActive.value) return
  setIsPageTransit(true)
  computeTransitionDirection(to)
  setTimeout(() => router.push(to), PAGE_TRANSITION_IN_MS)
}
</script>

<template>
  <span class="link" :class="[activeClass && isActive ? [activeClass] : '']" @click="handleClick">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.link {
  cursor: pointer;
}
</style>
