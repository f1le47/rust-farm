<script setup lang="ts">
import PageContainer from '@/ui/PageContainer.vue';
import PageInDevelopment from '@/ui/PageInDevelopment.vue';
import { useTranslation } from 'i18next-vue';

const t = useTranslation().t
</script>

<template>
  <PageContainer :title="t('raids.raids')">
    <PageInDevelopment />
  </PageContainer>
</template>
