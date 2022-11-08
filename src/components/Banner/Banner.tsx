import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { useTranslation } from '~/lib'

import * as S from './Banner.styled'

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Banner() {
  const { t } = useTranslation()

  const TITLE = `${t(`Let's do something amazing together.`)}`
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <S.Container ref={ref}>
          {inView && (
            <S.Title>
              {TITLE.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariant}
                  transition={{
                    delay: index / TITLE.length,
                    duration: 0.4,
                  }}
                  initial='hidden'
                  animate='visible'
                >
                  {char}
                </motion.span>
              ))}
            </S.Title>
          )}
        </S.Container>
      )}
    </InView>
  )
}
