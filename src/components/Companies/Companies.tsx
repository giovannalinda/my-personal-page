import { InView } from 'react-intersection-observer'

import * as S from './Companies.styled'

const companies = [
  {
    title: 'Front-end Developer',
    paragraph: 'Hypesoft • 6 meses',
  },
  {
    title: 'Front-end Developer',
    paragraph: '42 Dias Tecnologia • 5 meses',
  },
]

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export function Companies() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <S.Container ref={ref}>
          <S.Title>Carreira</S.Title>

          {inView && (
            <S.List>
              {companies.map((company, index) => (
                <S.ListItem
                  key={company.paragraph}
                  aria-label={company.title}
                  initial='hidden'
                  animate='visible'
                  variants={cardVariant}
                  transition={{
                    duration: 0.5,
                    delay: index / companies.length,
                  }}
                >
                  <h2>{company.title}</h2>
                  <S.Paragraph>{company.paragraph}</S.Paragraph>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </S.Container>
      )}
    </InView>
  )
}
