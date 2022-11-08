import { useTranslation } from '~/lib'

import * as S from './AboutMe.styled'

export function AboutMe() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Title>
        Giovanna Souza<span>.</span>
      </S.Title>
      <S.Occupation>
        Front-end Developer {t('at')} {''}
        <S.Link href='https://www.instagram.com/hypesoftbrasil/'>
          Hypesoft
        </S.Link>
      </S.Occupation>
      <S.Paragraph>
        {t('Hi! Pleasure')} 💜 <br />
        <br />
        {t(
          'I am a developer with a sparkle in my eye, who is always looking for the next level and who strives to bring relevant issues to the community.',
        )}
        <br />
        <br />
        {t(
          'I am passionate about creating useful and good quality products for users, I currently have 2 years in the development area and I am improving both in the technical part and in the leadership part of a team.',
        )}
        <br />
        <br />
        {t(
          `Some of my goals are to have continuous growth, impact people's lives and build good quality interfaces.`,
        )}
      </S.Paragraph>
    </S.Container>
  )
}
