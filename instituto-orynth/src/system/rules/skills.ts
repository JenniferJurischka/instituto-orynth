import { skills } from "../data/skills"
import { archetypes } from "../data/archetypes"
import type { CharacterBuild } from "../types/characters"
import { getModifier } from "./modifiers"

export type CalculatedSkill = {
  id: string
  name: string
  attribute: string
  attributeValue: number
  attributeModifier: number
  trained: boolean
  trainingBonus: number
  totalBonus: number
}

export function calculateCharacterSkills(build: CharacterBuild): CalculatedSkill[] {
  const archetypeData = archetypes[build.archetype]

  if (!archetypeData) {
    throw new Error(`Arquétipo não encontrado: ${build.archetype}`)
  }

  // 🛡️ FALLBACKS SEGUROS
const baseTrainedSkills = archetypeData.autoSkills ?? []
const extraSkillChoices = archetypeData.skillChoices?.options ?? []
const extraSkillChoiceCount = archetypeData.skillChoices?.choose ?? 0

const validExtraChoices = build.chosenExtraSkills
.filter((skillId) => extraSkillChoices.includes(skillId))
.slice(0, extraSkillChoiceCount)

const trainedSet = new Set([
  ...baseTrainedSkills,
  ...validExtraChoices,
])

  return Object.values(skills).map((skill) => {
    const attributeKey = skill.attribute as keyof typeof build.attributes
    const attributeValue = build.attributes[attributeKey] ?? 0
    const attributeModifier = getModifier(attributeValue)

    const trained = trainedSet.has(skill.id)
    const trainingBonus = trained ? 2 : 0

    return {
      id: skill.id,
      name: skill.name,
      attribute: skill.attribute,
      attributeValue,
      attributeModifier,
      trained,
      trainingBonus,
      totalBonus: attributeModifier + trainingBonus,
    }
  })
}