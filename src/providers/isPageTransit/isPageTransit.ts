import { computed, provide, ref, watchEffect, type Ref } from "vue"
import { Providers } from "../types"
import { PAGE_TRANSITION_IN_MS } from "./consts";
import { TransitionDirection } from "./types";
import router from "@/router";
import type { Paths } from "@/router/types";
import { routes } from "@/router/routes";

export interface IsPageTransit {
  isPageTransit: Ref<boolean, boolean>;
  setIsPageTransit: (value: boolean) => boolean;
  transitionDirection: Ref<TransitionDirection, TransitionDirection>;
  computeTransitionDirection: (path: Paths) => void;
}

export const isPageTransitProvider = () => {
  const isPageTransit = ref<boolean>(false)
  const setIsPageTransit = (value: boolean) => isPageTransit.value = value

  const transitionDirection = ref<TransitionDirection>(TransitionDirection.Left)
  const computeTransitionDirection = (path: Paths) => {
    const direction = computed(() => {
      let currentIndex = -1;
      let nextIndex = -1;

      for (let i = 0; i < routes.length; i++) {
        if (routes[i].path === path) {
          nextIndex = i;
        }

        if (routes[i].path === router.currentRoute.value.path) {
          currentIndex = i;
        }
      }

      return currentIndex > nextIndex ? TransitionDirection.Right : TransitionDirection.Left
    })
    transitionDirection.value = direction.value;
  }

  watchEffect(() => {
    if (isPageTransit.value) {
      setTimeout(() => setIsPageTransit(false), PAGE_TRANSITION_IN_MS)
    }
  })

  provide(Providers.IsPageTransit, { isPageTransit, transitionDirection, setIsPageTransit, computeTransitionDirection })
}
