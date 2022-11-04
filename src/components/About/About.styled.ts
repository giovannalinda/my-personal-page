import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    margin-left: 10rem;
  }
`

export const Title = styled(motion.h1)`
  font-size: ${theme.font.sizes.large};
  margin-top: -18rem;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.subtitle};
    margin-top: -38rem;
  }
`

export const Paragraph = styled(motion.p)`
  font-size: ${theme.font.sizes.paragraph};
  color: ${theme.colors.gray400};
  max-width: 48rem;
`
