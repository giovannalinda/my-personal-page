import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 28rem;
  text-align: left;
  gap: 5rem
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.paragraph};
  color: ${theme.colors.gray400};
  max-width: 64rem;
  line-height: ${theme.font.lineHeights.large};
`
