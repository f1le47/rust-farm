import { defineStore } from "pinia";
import type { GeneticCode } from "./types";
import { DEFAULT_DESIRED_GEN_CODE, EMPTY_GEN_CODE } from "./consts";
import { ref } from "vue";

export const useGeneticsStore = defineStore('genetics', () => {
  const desiredGenCode = ref<GeneticCode>(DEFAULT_DESIRED_GEN_CODE);
  const newGenCode = ref<GeneticCode>(EMPTY_GEN_CODE);
  const yourGenCodes = ref<GeneticCode[]>([]);

  function changeDesiredGenCode(genCode: GeneticCode) {
    desiredGenCode.value = genCode;
  }
  function changeNewGenCode(genCode: GeneticCode) {
    newGenCode.value = genCode;
  }
  function addYourGenCode(genCode: GeneticCode) {
    newGenCode.value = EMPTY_GEN_CODE;
    yourGenCodes.value.push(genCode);
  }
  function removeYourGenCode(indexPos: number) {
    yourGenCodes.value = yourGenCodes.value.filter((_, index) => index !== indexPos);
  }

  return { desiredGenCode, newGenCode, yourGenCodes, changeDesiredGenCode, changeNewGenCode, addYourGenCode, removeYourGenCode }
})
