import { MAX_GENS_IN_CODE } from "@/stores/genetics/consts";
import { EMPTY_GEN, type GeneticCode } from "@/stores/genetics/types";

export function withoutEmptyGens(genCode: GeneticCode) {
  const emptyGenIndex = genCode.indexOf(EMPTY_GEN);
  return emptyGenIndex !== -1 ? genCode.slice(0, emptyGenIndex) : genCode
}

export function fillEmptyGens(genCode: GeneticCode) {
  return genCode.length < MAX_GENS_IN_CODE ? (genCode + new Array(MAX_GENS_IN_CODE - genCode.length).fill(EMPTY_GEN).join("")) : genCode
}
