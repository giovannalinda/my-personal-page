import { InView } from 'react-intersection-observer'
import { useTranslation } from '~/lib'

import * as S from './Companies.styled'

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export function Companies() {
  const { t } = useTranslation()

  const companies = [
    {
      year: 2022,
      site: 'https://www.linkedin.com/company/hypesoft',
      title: `Front-end Developer ${t('at')} Hypesoft • 6 meses `,
      description: `${t(
        'I developed from the layout to the Front-end of the application with clean and quality codes. I did interviews and reviewed tech challenges for candidates, in addition to doing the onboarding process for new developers. On a day-to-day basis, I was responsible for managing the internal development team, reviewing codes, providing feedback and instructions.',
      )}`,
    },
    {
      year: 2021,
      site: 'https://www.linkedin.com/company/42-dias-tecnologia',
      title: `Front-end Developer ${t('at')} 42 Dias • 5 meses`,
      description: `${t(
        'I developed layouts in Figma, made decisions at the level of internal processes and built interfaces thinking about end-user usability and code maintenance.',
      )}`,
    },
  ]

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <S.Container ref={ref}>
          <S.Title>{t('Career')}</S.Title>

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
