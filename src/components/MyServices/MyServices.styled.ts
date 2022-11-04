import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40rem;
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.big};
  text-align: center;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.title};
  }

  span {
    color: ${theme.colors.white};
    -webkit-text-fill-color: ${theme.colors.black};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.colors.white};
  }
`
