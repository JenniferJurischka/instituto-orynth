import type { AttributeKey } from "./attributes"

export type AbilityRarity = "comum" | "incomum" | "rara" | "epica"

export type ActiveAbility = {
  id: string
  name: string
  costPEH: number
  rarity: AbilityRarity
  description: string

  pfCost?: number
  attributeBase?: AttributeKey[]
  range?: string
  duration?: string
  type?: string

  effects?: string[]
  uses?: string
  trigger?: string
  requirement?: string
  risk?: string

  hidden?: boolean
}
