import Link from 'next/link'

import * as S from './LocaleSelect.styled'

const locales = [
  {
    name: 'EN',
    locale: 'en-US',
  },
  {
    name: ' PT',
    locale: 'pt-BR',
  },
]

export function LocaleSelect() {
  return (
    <S.Container>
      <S.SelectList>
        {locales.map(({ name, locale }) => (
          <li key={locale}>
            <Link href='/' locale={locale} passHref>
              <button>{name}</button>
            </Link>
          </li>
        ))}
      </S.SelectList>
    </S.Container>
  )
}
