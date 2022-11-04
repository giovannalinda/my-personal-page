import styled from 'styled-components'
import { theme } from '~/styles'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space[4]};
  }
`
