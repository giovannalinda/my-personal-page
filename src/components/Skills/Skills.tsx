import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiStorybook,
  SiJest,
  SiFigma,
} from 'react-icons/si'

import { InView } from 'react-intersection-observer'

import { useTranslation } from '~/lib'

import * as S from './Skills.styled'

const skills = [
  {
    name: 'HTML',
    logo: <SiHtml5 size={80} />,
  },
  {
    name: 'CSS',
    logo: <SiCss3 size={80} />,
  },
  {
    name: 'JavaScript',
    logo: <SiJavascript size={80} />,
  },
  {
    name: 'React',
    logo: <SiReact size={80} />,
  },
  {
    name: 'TypeScript',
    logo: <SiTypescript size={80} />,
  },
  {
    name: 'Next',
    logo: <SiNextdotjs size={80} />,
  },
  {
    name: 'Styled Components',
    logo: <SiStyledcomponents size={80} />,
  },
  {
    name: 'Storybook',
    logo: <SiStorybook size={80} />,
  },
  {
    name: 'Jest',
    logo: <SiJest size={80} />,
  },
  {
    name: 'Figma',
    logo: <SiFigma size={80} />,
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

export function Skills() {
  const { t } = useTranslation()

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref}>
          <S.Title>{t('Skills')}</S.Title>

          {inView && (
            <S.List
              initial='hidden'
              animate='visible'
              variants={cardVariant}
              transition={{
                duration: 0.1,
                delay: 1,
              }}
            >
              {skills.map((skill, index) => (
                <S.ListItem
                  key={skill.name}
                  aria-label={skill.name}
                  initial='hidden'
                  animate='visible'
                  variants={cardVariant}
                  transition={{
                    duration: 0.5,
                    delay: index / skills.length,
                  }}
                >
                  {skill.logo}
                  <S.Paragraph>{skill.name}</S.Paragraph>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </div>
      )}
    </InView>
  )
}
