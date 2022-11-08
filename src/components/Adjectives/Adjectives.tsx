import { useTranslation } from '~/lib'

import * as S from './Adjectives.styled'

export function Adjectives() {
  const { t } = useTranslation()

  return (
    <S.List>
      <S.ListItem>
        <S.Title>{t('Creativity')}</S.Title>
      </S.ListItem>
      <S.ListItem>
        <S.Title>{t('Singularity')}</S.Title>
      </S.ListItem>
      <S.ListItem>
        <S.Title>{t('Curiosity')}</S.Title>
      </S.ListItem>
    </S.List>
  )
}
