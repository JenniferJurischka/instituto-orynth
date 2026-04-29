export type RarityTier = "comum" | "incomum" | "rara" | "epica"

export function getMaxRarityByLevel(level:number){
    if(level <= 2)return "comum"
    if(level <= 4)return "incomum"
    if(level <= 6)return "rara"
    return "epica"
}

export function getTotalPDByLevel(level: number): number {
  if (level <= 1) return 0

  if (level <= 3) return 2 * (level - 1)
  if (level <= 6) return 4 + 3 * (level - 3)
  if (level <= 9) return 13 + 4 * (level - 6)
  return 25 + 4 * (level - 9)
}

export function getTotalPEHByLevel(level:number): number{
    if (level <= 1) return 0
    return level -1
}