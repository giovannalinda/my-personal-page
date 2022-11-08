import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { Assets } from '~/assets'
import { useTranslation } from '~/lib'

import * as S from './About.styled'

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function About() {
  const { t } = useTranslation()

  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <S.Container ref={ref}>
          {inView && (
            <>
              <S.ContainerImage
                variants={rightVariant}
                initial='hidden'
                animate='visible'
              >
                <Image
                  src={Assets.AboutImg}
                  width={387}
                  height={544}
                  alt='Imagem de uma caneca escrito Develop. Preview. Ship.'
                />
              </S.ContainerImage>

              <S.ContainerText>
                <S.Title
                  variants={leftVariant}
                  initial='hidden'
                  animate='visible'
                >
                  {t(
                    'Dedicated to finding the best creative solutions for your brands.',
                  )}
                </S.Title>

                <S.Paragraph
                  variants={leftVariant}
                  initial='hidden'
                  animate='visible'
                >
                  {t(
                    'I care about every detail when building interfaces valuing the experience so that it positively impacts the lives of users.',
                  )}
                </S.Paragraph>
              </S.ContainerText>
            </>
          )}
        </S.Container>
      )}
    </InView>
  )
}
