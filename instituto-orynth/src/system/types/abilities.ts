import type { RarityTier } from "../rules/progression"

export type PassiveAbility = {
    id: string
    name: string
    costPD: number
    rarity: RarityTier
    description: string
    narrative?: string
    risk?: string
    effects?: string[]
    uses?: string
    trigger?: string
}