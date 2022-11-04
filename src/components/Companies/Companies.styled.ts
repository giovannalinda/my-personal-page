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
`

export const ListItem = styled(motion.li)`
  background: ${theme.colors.gray900};
  padding: 8rem ${theme.space[7]};
  width: 100%;
  transition: ${theme.transitions.slow};
  border: 1px solid ${theme.colors.gray900};

  &:hover {
    border-color: ${theme.colors.white};
  }

  & + & {
    margin-left: ${theme.space[4]};
  }

  h2 {
    padding-bottom: ${theme.space[3]};
    font-size: ${theme.font.sizes.paragraph};
    font-weight: ${theme.font.weigths.medium};
  }
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.gray400};
`
