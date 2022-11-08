import Image from 'next/image'

import { motion } from 'framer-motion'

import { Assets } from '~/assets'
import { useTranslation } from '~/lib'

import * as S from './Apresentation.styled'

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Apresentation() {
  const { t } = useTranslation()

  const TITLE = `${t('Building digital products, brands & experience.')}`
  const PARAGRAPH = `${t('CONTACT ME HERE')}`
  const EMAIL = 'eugiovannasouza@gmail.com'

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {t('Building digital products, brands & experience.')
            .split('')
            .map((char, index) => (
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
        <S.Paragraph>
          {PARAGRAPH.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariant}
              transition={{
                delay: index / PARAGRAPH.length,
                duration: 0.4,
              }}
              initial='hidden'
              animate='visible'
            >
              {char}
            </motion.span>
          ))}
        </S.Paragraph>
        <S.Link href='mailto:eugiovannasouza@gmail.com'>
          {EMAIL.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariant}
              transition={{
                delay: index / PARAGRAPH.length,
                duration: 0.4,
              }}
              initial='hidden'
              animate='visible'
            >
              {char}
            </motion.span>
          ))}
        </S.Link>
      </S.Content>

      <S.AboutImageWrapper>
        <Image
          src={Assets.ApresentationImg}
          width={300}
          height={600}
          objectFit='cover'
        />
      </S.AboutImageWrapper>
    </S.Container>
  )
}
