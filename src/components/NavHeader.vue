<script setup lang="ts">
import { routes } from '@/router/routes'
import { Paths } from '@/router/types'
import LogoIcon from '@/assets/icons/logo.svg?component'
import { useTranslation } from 'i18next-vue';
import NavLink from '@/ui/NavLink.vue';

const t = useTranslation().t
</script>

<template>
  <header class="header">
    <NavLink :to="Paths.Home"><LogoIcon /></NavLink>
    <nav class="nav-links">
      <NavLink
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        class="nav-links__link"
        active-class="nav-links__link_active"
      >
        {{ t("navbar." + route.name) }}
      </NavLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;
    align-items: center;
    column-gap: 16px;

    &__link {
      font-family: 'BebasNeue';
      @include font_m;
      color: $primary-text;
      transition: color .3s ease;

      &:hover {
        color: $light;
      }
      &_active {
        color: $light;
      }
    }
  }
}
</style>
