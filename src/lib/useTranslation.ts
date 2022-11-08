import { useRouter } from 'next/router'
import { Locale, locales } from '~/assets/locales'

export function useTranslation() {
  const { locale = 'en-US' } = useRouter()

  const translations = locales[locale as keyof Locale]

  function t(translateKey: keyof typeof translations) {
    return translations[translateKey]
  }

  return {
    t,
  }
}
