import { useTranslation } from '~/lib'

import * as S from './Statistics.styled'

export function Statistics() {
  const { t } = useTranslation()

  return (
    <S.List>
      <S.ListItem>
        <S.Title>2+</S.Title>
        <S.Paragraph>{t('Years Experience')}</S.Paragraph>
      </S.ListItem>

      <S.ListItem>
        <S.Title>600+</S.Title>
        <S.Paragraph>{t('Contributions This Year')}</S.Paragraph>
      </S.ListItem>

      <S.ListItem>
        <S.Title>100%</S.Title>
        <S.Paragraph>{t('Of Satisfaction')}</S.Paragraph>
      </S.ListItem>
    </S.List>
  )
}
