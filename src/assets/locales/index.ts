import ptBR from './pt-BR.json'
import enUS from './en-US.json'

export const locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

export type Locale = typeof locales
