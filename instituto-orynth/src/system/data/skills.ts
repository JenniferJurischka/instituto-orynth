import type { AttributeKey } from "../types/attributes"

export type SkillData = {
  id: SkillKey
  name: string
  attribute: AttributeKey
  trained?: boolean
}

export const skills: Record<string, SkillData> = {
  logica: {
    id: "logica",
    name: "Lógica",
    attribute: "INT",
  },
  investigacao: {
    id: "investigacao",
    name: "Investigação",
    attribute: "INT",
  },
  pesquisa: {
    id: "pesquisa",
    name: "Pesquisa",
    attribute: "INT",
  },
  atletismo: {
    id: "atletismo",
    name: "Atletismo",
    attribute: "FOR",
  },
  acrobacia: {
    id: "acrobacia",
    name: "Acrobacia",
    attribute: "DES",
  },
  furtividade: {
    id: "furtividade",
    name: "Furtividade",
    attribute: "DES",
  },
  reflexo: {
    id: "reflexo",
    name: "Reflexo",
    attribute: "DES",
  },
  diplomacia: {
    id: "diplomacia",
    name: "Diplomacia",
    attribute: "CAR",
  },
  enganacao: {
    id: "enganacao",
    name: "Enganação",
    attribute: "CAR",
  },
  empatia: {
    id: "empatia",
    name: "Empatia",
    attribute: "SAB",
  },
  oficio: {
    id: "oficio",
    name: "Ofício",
    attribute: "DES",
  },
  pilotagem: {
    id: "pilotagem",
    name: "Pilotagem",
    attribute: "DES",
    trained: true,
  },
  artes: {
    id: "artes",
    name: "Artes",
    attribute: "INT",
  },
  primeiros_socorros: {
    id: "primeiros_socorros",
    name: "Primeiros Socorros",
    attribute: "SAB",
  },
  intuicao: {
    id: "intuicao",
    name: "Intuição",
    attribute: "SAB",
  },
  percepcao: {
    id: "percepcao",
    name: "Percepção",
    attribute: "VON",
  },
  controle_mental: {
    id: "controle_mental",
    name: "Controle Mental",
    attribute: "VON",
  },
    miticismo: {
    id: "miticismo",
    name: "Miticismo",
    attribute: "INT",
    trained: true,
  },
} as const


export type SkillKey = keyof typeof skills
  | "atletismo"
  | "acrobacia"
  | "artes"
  | "diplomacia"
  | "empatia"
  | "reflexo"
  | "investigacao"
  | "intuicao"
  | "enganacao"
  | "logica"
  | "pesquisa"
  | "oficio"
  | "pilotagem"
  | "percepcao"
  | "primeiros_socorros"
  | "furtividade"
  | "controle_mental"
  | "miticismo"