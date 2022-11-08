import { useTranslation } from '~/lib'

import { SocialNetworks } from '../SocialNetworks'

import * as S from './Contact.styled'

export function Contact() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Title>{t('Hi! How are you?')}</S.Title>
      <S.Paragraph>
        {t(
          'Feel free to send me a message and contact me through any of my networks.',
        )}
      </S.Paragraph>
      <SocialNetworks />
    </S.Container>
  )
}
