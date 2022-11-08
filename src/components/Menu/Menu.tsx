import Link from 'next/link'

import { useTranslation } from '~/lib'

import * as S from './Menu.styled'

export function Menu() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.List>
        <S.ListItem>
          <Link href='/'>{t('HOME')}</Link>
        </S.ListItem>
        <S.ListItem>
          <Link href='/about-me'>{t('WHO I AM')}</Link>
        </S.ListItem>
        <S.ListItem>
          <Link href='/contact'>{t('CONTACT')}</Link>
        </S.ListItem>
      </S.List>
    </S.Container>
  )
}
