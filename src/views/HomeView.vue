<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { Paths } from '@/router/types'
import RedirectButton from '@/ui/RedirectButton.vue'
import ContainerUI from '@/ui/ContainerUI.vue'
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { Providers } from '@/providers/types'
import type { IsPageTransit } from '@/providers/isPageTransit/isPageTransit'

const { t } = useTranslation()
const { isPageTransit } = inject(Providers.IsPageTransit) as IsPageTransit

const animationQueue = ref<string[]>(['titles', 'button'])

const titlesAppearence = computed(() => !(animationQueue.value.includes('titles')))
const buttonAppearence = computed(() => !(animationQueue.value.includes('button')))

onMounted(() => {
  setTimeout(() => {
    if (animationQueue.value.length > 0) {
      animationQueue.value.shift()
    }
  }, 0)

  const intervalId = setInterval(() => {
    if (animationQueue.value.length > 0) {
      animationQueue.value.shift()
    } else {
      clearInterval(intervalId)
    }
  }, 800)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})

</script>

<template>
  <main class="background">
    <ContainerUI>
      <div class="page-container">
        <div class="titles">
          <h1 class="title" :class="{ 'appearence-titles': titlesAppearence, 'transtition-titles': isPageTransit }">{{ t('home.title') }}</h1>
          <p class="subtitle" :class="{ 'appearence-titles': titlesAppearence, 'transtition-titles': isPageTransit }">{{ t('home.subtitle') }}</p>
        </div>
        <div class="button">
          <RedirectButton
            :link="Paths.Genetics"
            :text="t('home.to genetics')"
            class="redirect-button"
            :class="{ 'appearence-button': buttonAppearence, 'transition-button': isPageTransit }"
          />
        </div>
      </div>
    </ContainerUI>
  </main>
</template>

<style scoped lang="scss">
.background {
  background-image: url('@/assets/images/background.png');
  min-height: 100vh;

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    height: calc(100vh - $header_height);
    justify-content: center;

    .titles {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .title {
        @include font_title;
        color: $primary-text;
        transform: translateX(-100%);
        transition: transform .5s ease-out;
      }

      .subtitle {
        @include font_subtitle;
        font-family: 'Helvetica';
        font-weight: 300;
        color: $primary-text;
        white-space: pre-line;
        transform: translateX(-100%);
        transition: transform .8s ease-out;
      }

      .appearence-titles {
        transform: translateX(0);
      }

      .transtition-titles {
        transform: translateX(-100%);
      }
    }

    .button {
      position: relative;
      top: 120px;
      overflow: hidden;

      .redirect-button {
        position: relative;
        top: 100%;
        transition: top .3s ease;
      }

      .appearence-button {
        top: 0;
      }

      .transition-button {
        top: 100%;
      }
    }
  }
}
</style>
