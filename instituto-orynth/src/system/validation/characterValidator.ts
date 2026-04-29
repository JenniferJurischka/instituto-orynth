import { archetypes } from "../data/archetypes"
import { graduations } from "../data/graduations"
import { subclasses } from "../data/subclasses"
import { technicalCourses } from "../data/technicalCourses"

import type { CharacterBuild } from "../types/characters"

export function validateCharacterBuild(build: CharacterBuild) {
  const archetypeData = archetypes[build.archetype]

  if (!archetypeData) {
    throw new Error(`Arquétipo inválido: ${build.archetype}`)
  }

  const graduationData = graduations[build.graduation]

  if (!graduationData) {
    throw new Error(`Graduação inválida: ${build.graduation}`)
  }

  if (build.subclass) {
    const subclassData = subclasses[build.subclass]

    if (!subclassData) {
      throw new Error(`Subclasse inválida: ${build.subclass}`)
    }
  }

  if (build.technicalCourse) {
    const technicalData = technicalCourses[build.technicalCourse]

    if (!technicalData) {
      throw new Error(`Curso técnico inválido: ${build.technicalCourse}`)
    }
  }

  // validar escolhas extras de perícia
  const validChoices = build.chosenExtraSkills.filter(skill =>
    archetypeData.extraSkillChoices.includes(skill)
  )

  if (validChoices.length !== build.chosenExtraSkills.length) {
    throw new Error("Perícia extra inválida para este arquétipo")
  }

  if (validChoices.length > archetypeData.extraSkillChoiceCount) {
    throw new Error("Número de perícias extras excede o permitido")
  }
}