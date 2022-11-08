import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.nav``

export const List = styled.ul`
  padding: ${theme.space[5]};
  margin: 28rem 0 0 0;
  overflow-y: scroll;
`

export const ListItem = styled.li`
  cursor: pointer;
  font-size: ${theme.font.sizes.large};
  padding-bottom: ${theme.space[5]};
  text-align: left;
  transition: ${theme.transitions.slow};

  a {
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.gray400};
    }
  }
`
