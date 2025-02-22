export enum PositiveGens {
  G = "G",
  Y = "Y",
  H = "H"
}
export enum NegativeGens {
  X = "X",
  W = "W"
}
export const EMPTY_GEN = "E" as const;

export type Gen = PositiveGens.G | PositiveGens.Y | PositiveGens.H | NegativeGens.X | NegativeGens.W | typeof EMPTY_GEN

export type GeneticCode = string;
