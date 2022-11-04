import { InView } from 'react-intersection-observer'

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
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <S.Container ref={ref}>
          {inView && (
            <>
              <S.Title
                variants={leftVariant}
                initial='hidden'
                animate='visible'
              >
                Dedicada a encontrar as melhores soluções criativas para suas
                marcas
              </S.Title>
              <S.Paragraph
                variants={rightVariant}
                initial='hidden'
                animate='visible'
              >
                Me preocupo com cada detalhe na hora de construir interfaces
                valorizando a experiência para que ela impacte positivamente a
                vida dos usuários.
              </S.Paragraph>
            </>
          )}
        </S.Container>
      )}
    </InView>
  )
}
