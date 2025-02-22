import { EMPTY_GEN, type GeneticCode } from "./types";

export const DEFAULT_DESIRED_GEN_CODE: GeneticCode = "YYYGGG";

export const MAX_GENS_IN_CODE = 6;
export const EMPTY_GEN_CODE: GeneticCode = new Array(MAX_GENS_IN_CODE).fill(EMPTY_GEN).join("");
