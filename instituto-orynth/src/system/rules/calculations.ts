import { archetypes } from "../data/archetypes"
import type { CharacterBuild } from "../types/characters"
import { getModifier } from "./modifiers"

export type CalculatedSheet = {
    hpMax: number
    pfMax: number
    sanMax: number
    defense: number

    baseHpMax: number
    basePfMax: number
    baseSanMax: number
}

export function calculateCharacterSheet(build: CharacterBuild): CalculatedSheet {
    
    const { level, attributes, archetype } = build
    
    const arch = archetypes[archetype]

    if (!arch) {
        throw new Error(`Arquétipo não encontrado: ${archetype}`)
    }

    const modCON = getModifier(attributes.CON)
    const modVON = getModifier(attributes.VON)
    const modSAB = getModifier(attributes.SAB)
    const modDES = getModifier(attributes.DES)

    const hpBase = arch.hpBase
    const hpPerLevelBonus = arch.hpPerLevelBonus

    // HP
    const hpMax =
        hpBase +
        modCON +
        (level - 1) * hpPerLevelBonus

    // PF
    const pfMax =
        8 +
        modVON +
        (level- 1) * 4

    // SAN
    const sanMax =
        10 +
        modSAB +
        (level- 1) * 2

    // DEF
    const defense =
        10 +
        modDES

    return {
        hpMax,
        pfMax,
        sanMax,
        defense,

        baseHpMax: hpMax,
        basePfMax: pfMax,
        baseSanMax: sanMax,
    }
}