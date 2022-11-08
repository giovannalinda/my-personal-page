import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    margin-left: 10rem;
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    margin-left: ${theme.space[7]};
    text-align: center;
  }
`

export const Title = styled(motion.h1)`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: ${theme.font.sizes.large};
  padding-bottom: ${theme.space[7]};
  width: 100%;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.subtitle};
  }
`

export const Paragraph = styled(motion.p)`
  font-size: ${theme.font.sizes.paragraph};
  color: ${theme.colors.gray400};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.subtitle};
  }
`

export const ContainerText = styled.div`
  max-width: 78rem;
  padding-right: ${theme.space[7]};
`

export const ContainerImage = styled(motion.div)`
  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    display: none;
  }
`
