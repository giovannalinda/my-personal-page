import { useTranslation } from '~/lib'
import { SocialNetworks } from '../SocialNetworks'

import * as S from './Footer.styled'

export function Footer() {
  const { t } = useTranslation()

  return (
    <S.Footer>
      <SocialNetworks />
      <S.Paragraph>Giovanna Souza © {t('All rights reserved.')}</S.Paragraph>
    </S.Footer>
  )
}
