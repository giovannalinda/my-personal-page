import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: ${theme.space[7]};
  text-align: center;
  border: 1px solid ${theme.colors.gray800};
  padding: 14rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    margin: ${theme.space[7]} ${theme.space[7]};
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.paragraph};
  font-weight: ${theme.font.weigths.regular};
  padding: ${theme.space[7]};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.verySmall};
  font-weight: ${theme.font.weigths.medium};
  padding: ${theme.space[7]};
`
