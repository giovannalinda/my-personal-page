import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 26rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    padding-left: 10rem;
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
  max-width: 68rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.large};
  }
`

export const Paragraph = styled.p`
  color: ${theme.colors.gray400};
  padding-top: ${theme.space[7]};
  font-size: ${theme.font.sizes.verySmall};
`

export const Link = styled.a`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.subtitle};
  text-decoration: underline;
  padding-top: ${theme.space[2]};
`
