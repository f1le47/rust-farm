<script setup lang="ts">
import '@common/styles/general.scss'
import { provide, ref } from 'vue';
import type { Paths } from './router/types';

const visitedPages = ref<Paths[]>([])
const addVisitedPage = (page: Paths) => {
  visitedPages.value.push(page)
}
export interface VisitedPagesProvider {
  visitedPages: typeof visitedPages;
  addVisitedPage: typeof addVisitedPage;
}
provide("visitedPages", { visitedPages, addVisitedPage })
</script>

<template>
  <RouterView />
</template>
