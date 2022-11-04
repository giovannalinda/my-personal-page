import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: 28rem;
  text-align: left;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  ul {
    margin: 5rem -2rem;
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.paragraph};
  color: ${theme.colors.gray400};
  max-width: 64rem;
  padding-top: ${theme.space[7]};
  line-height: ${theme.font.lineHeights.large};
`
