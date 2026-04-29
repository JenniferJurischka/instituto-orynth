import { validateCharacterBuild } from "../validation/characterValidator"
import type { CharacterBuild } from "../types/characters"
import type { CalculatedSheet } from "../rules/calculations"
import type { RarityTier } from "../rules/progression"
import type { ArchetypeData } from "../data/archetypes"
import type { GraduationData } from "../data/graduations"
import type { SubclassData } from "../data/subclasses"
import type { TechnicalCourseData } from "../data/technicalCourses"

import { archetypes } from "../data/archetypes"
import { graduations } from "../data/graduations"
import { subclasses } from "../data/subclasses"
import { technicalCourses } from "../data/technicalCourses"
import { calculateCharacterSheet } from "../rules/calculations"
import { getMaxRarityByLevel, getTotalPDByLevel, getTotalPEHByLevel } from "../rules/progression"
import type { CalculatedSkill } from "../rules/skills"
import { calculateCharacterSkills } from "../rules/skills"

export type BuiltCharacter = {
  build: CharacterBuild
  sheet: CalculatedSheet
  skills: CalculatedSkill
  archetypeData: ArchetypeData
  graduationData: GraduationData
  subclassData: SubclassData | null
  technicalCourseData: TechnicalCourseData | null
  progression: {
    totalPD: number
    totalPEH: number
    maxRarity: RarityTier
  }
}

export function buildCharacterSheet(build: CharacterBuild): BuiltCharacter {

  validateCharacterBuild(build)
  
  const archetypeData = archetypes[build.archetype]

  if (!archetypeData) {
    throw new Error(`Arquétipo não encontrado no engine: ${build.archetype}`)
  }

  const graduationData = graduations[build.graduation]

  if (!graduationData) {
    throw new Error(`Graduação não encontrada no engine: ${build.graduation}`)
  }

  const subclassData = build.subclass
    ? subclasses[build.subclass] ?? null
    : null

  const technicalCourseData = build.technicalCourse
    ? technicalCourses[build.technicalCourse] ?? null
    : null

  const sheet = calculateCharacterSheet(build)
  const calculatedSkills =  calculateCharacterSkills(build)

  if(technicalCourseData?.passiveBonus?.pfBonus){
    sheet.pfMax += technicalCourseData.passiveBonus.pfBonus
  }

  if(technicalCourseData?.passiveBonus?.hpBonus){
    sheet.hpMax += technicalCourseData.passiveBonus.hpBonus
  }

  if(technicalCourseData?.passiveBonus?sanBonus): {
    sheet.sanMax += technicalCourseData?.passiveBonus?.sanBonus
  }

  const progression = {
    totalPD: getTotalPDByLevel(build.level),
    totalPEH: getTotalPEHByLevel(build.level),
    maxRarity: getMaxRarityByLevel(build.level),
  }

  return {
    build,
    sheet,
    skills: calculatedSkills,
    archetypeData,
    graduationData,
    subclassData,
    technicalCourseData,
    progression,
  }
}