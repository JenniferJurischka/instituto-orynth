import type { SkillKey } from "../data/skills"

export type AttributeSet = {
    FOR: number
    DES: number
    INT: number
    SAB: number
    CAR: number
    VON: number
    CON: number
}

export type CharacterBuild = {
    level: number

    archetype: string
    subclass?: string | null
    graduation: string
    technicalCourse?: string | null

    attributes: AttributeSet

    chosenExtraSkills: SkillKey[]
    chosenTechnicalSkill?: string | null
}