import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34rem;
  text-align: center;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    padding: ${theme.space[5]};
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
  color: ${theme.colors.white};
  -webkit-text-fill-color: ${theme.colors.black};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${theme.colors.white};
`
