import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: 22rem;
  text-align: left;
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
`

export const Occupation = styled.small`
  font-size: ${theme.font.sizes.paragraph};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.paragraph};
  color: ${theme.colors.gray400};
  max-width: 68rem;
  padding-top: ${theme.space[7]};
  line-height: ${theme.font.lineHeights.large};
`

export const Link = styled.a`
  text-decoration: underline ${theme.colors.purple};
  color: ${theme.colors.white};
`
