import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-bottom: 30rem;
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.subtitle};
  font-weight: ${theme.font.weigths.regular};
  padding-bottom: ${theme.space[7]};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    padding-left: ${theme.space[7]};
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ListItem = styled(motion.li)`
  padding: ${theme.space[7]} ${theme.space[0]};
  width: 100%;
  transition: ${theme.transitions.slow};
  display: flex;
  margin-bottom: ${theme.space[4]};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    flex-direction: column;
    padding: 0 ${theme.space[7]} ${theme.space[7]} ${theme.space[7]};
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    padding: 0 0 ${theme.space[7]} ${theme.space[7]};
  }

  h2 {
    padding-bottom: ${theme.space[3]};
    font-size: ${theme.font.sizes.paragraph};
    font-weight: ${theme.font.weigths.medium};
  }
`

export const Year = styled.h1`
  font-size: ${theme.font.sizes.large};
  padding-right: ${theme.space[7]};
  display: flex;
  align-items: center;
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.gray400};
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: ${theme.colors.white};
  }
`
