<script setup lang="ts">
import { useGeneticsStore } from '@/stores/genetics/genetics';
import ContainerUI from '@ui/ContainerUI.vue'
import { useTranslation } from 'i18next-vue';
import WithEditGenCode from '@/components/GenCode/WithEditGenCode/WithEditGenCode.vue';
import YourGenCodes from '@/components/GenCode/YourGenCodes/YourGenCodes.vue';

const t = useTranslation().t
const geneticsStore = useGeneticsStore()
</script>

<template>
  <main>
    <ContainerUI>
      <div class="page-container">
        <h1 class="title">{{ t("genetics.genetics") }}</h1>
        <div class="genGroupList">
          <div class="genGroup">
            <p class="genGroup__label">{{ t("genetics.desired genetics") }}</p>
            <WithEditGenCode :gen-code="geneticsStore.desiredGenCode" @onChangeGenCode="geneticsStore.changeDesiredGenCode" />
          </div>
          <div class="genGroup">
            <p class="genGroup__label">{{ t("genetics.enter gen") }}</p>
            <WithEditGenCode :gen-code="geneticsStore.newGenCode" @on-change-gen-code="geneticsStore.changeNewGenCode" can-be-submit @on-submit-gen-code="geneticsStore.addYourGenCode" />
          </div>
          <div class="genGroup">
            <p class="genGroup__label">{{ t("genetics.your gens") }}</p>
            <span v-if="geneticsStore.yourGenCodes.length === 0" class="genGroup__empty">{{ t("genetics.You haven't added any gens yet") }}</span>
            <YourGenCodes v-else :gen-codes="geneticsStore.yourGenCodes" @remove-gen-code="geneticsStore.removeYourGenCode" />
          </div>
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

  .title {
    @include font_title;
    text-align: center;
  }

  .genGroupList {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    .genGroup {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 4px;

      &__label {
        @include font_m;
      }

      &__empty {
        @include font_s;
      }
    }
  }
}
</style>
