import { InView } from 'react-intersection-observer'

import * as S from './Companies.styled'

const companies = [
  {
    year: 2022,
    site: 'https://www.linkedin.com/company/hypesoft',
    title: 'Front-end Developer na Hypesoft • 6 meses ',
    description:
      'Desenvolvi desde o layout até o Front-end da aplicação com códigos limpos e de qualidade. Fiz entrevistas e revisei tech challenges de candidatos, além de fazer o processo de onboarding de novos desenvolvedores. No dia a dia era responsável pela gestão do time de desenvolvimento interno, fazendo revisão de códigos, passando feedbacks e instruções.',
  },
  {
    year: 2021,
    site: 'https://www.linkedin.com/company/42-dias-tecnologia',
    title: 'Front-end Developer na 42 Dias • 5 meses ',
    description:
      'Desenvolvi layouts no Figma, tomava decisões a nível de processos internos e construí interfaces pensando na usabilidade do usuário final e na manutenção dos códigos.',
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
                  key={company.title}
                  aria-label={company.title}
                  initial='hidden'
                  animate='visible'
                  variants={cardVariant}
                  transition={{
                    duration: 0.5,
                    delay: index / companies.length,
                  }}
                >
                  <S.Year>{company.year}</S.Year>
                  <S.ContainerDescription>
                    <h2>
                      <a href={company.site} target='_blank' rel='noreferrer'>
                        {company.title}
                      </a>
                    </h2>
                    <S.Paragraph>{company.description}</S.Paragraph>
                  </S.ContainerDescription>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </S.Container>
      )}
    </InView>
  )
}
