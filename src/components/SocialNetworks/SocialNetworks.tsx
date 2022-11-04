import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiInstagram,
} from 'react-icons/fi'
import { SiMedium } from 'react-icons/si'

import * as S from './SocialNetworks.styled'

export function SocialNetworks() {
  return (
    <S.List>
      <S.ListItem>
        <a
          href='https://github.com/giovannalinda'
          target='_blank'
          rel='noreferrer'
        >
          <FiGithub size={22} />
        </a>
      </S.ListItem>
      <S.ListItem>
        <a
          href='https://www.linkedin.com/in/giovannalinda'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiLinkedin size={22} />
        </a>
      </S.ListItem>
      <S.ListItem>
        <a
          href='https://medium.com/@eugiovannasouza'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiMedium size={22} />
        </a>
      </S.ListItem>
      <S.ListItem>
        <a
          href='mailto:eugiovannasouza@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiMail size={22} />
        </a>
      </S.ListItem>
      <S.ListItem>
        <a
          href='https://twitter.com/oigiovannasouza'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiTwitter size={22} />
        </a>
      </S.ListItem>
      <S.ListItem>
        <a
          href='https://www.instagram.com/oigiovannasouza'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiInstagram size={22} />
        </a>
      </S.ListItem>
    </S.List>
  )
}
