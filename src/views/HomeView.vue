<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { Paths } from '@/router/types'
import RedirectButton from '@/ui/RedirectButton.vue'
import ContainerUI from '@/ui/ContainerUI.vue'

const { t } = useTranslation()
</script>

<template>
  <main class="background">
    <ContainerUI>
      <div class="page-container">
        <div class="titles">
          <h1 class="title">{{ t('home.title') }}</h1>
          <p class="subtitle">{{ t('home.subtitle') }}</p>
        </div>
        <RedirectButton
          :link="Paths.Genetics"
          :text="t('home.to genetics')"
          class="redirect-button"
        />
      </div>
    </ContainerUI>
  </main>
</template>

<style scoped lang="scss">
.background {
  background-image: url('@/assets/images/background.png');
  min-height: 100vh;

  .page-container {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - $header_height);
    justify-content: center;

    .titles {
      display: flex;
      flex-direction: column;

      .title {
        @include font_title;
        color: $primary-text;
      }

      .subtitle {
        @include font_subtitle;
        font-family: 'Helvetica';
        font-weight: 300;
        color: $primary-text;
        white-space: pre-line;
      }
    }

    .redirect-button {
      position: relative;
      top: 120px;
    }
  }
}
</style>
