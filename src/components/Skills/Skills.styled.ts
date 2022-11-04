import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

export const List = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 30rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${theme.space[7]};
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.subtitle};
  font-weight: ${theme.font.weigths.regular};
  padding-bottom: ${theme.space[7]};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    padding-left: ${theme.space[7]};
  }
`

export const ListItem = styled(motion.li)`
  padding: ${theme.space[7]};
  border: 1px solid ${theme.colors.gray800};
  font-size: ${theme.font.sizes.small};
  transition: ${theme.transitions.slow};

  &:hover {
    border-color: ${theme.colors.white};
  }
`

export const Paragraph = styled.p`
  padding-top: ${theme.space[4]};
`
