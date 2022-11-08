import styled from 'styled-components'
import { theme } from '~/styles'

export const List = styled.ul`
  display: flex;
  margin-top: 12rem;
  padding: ${theme.space[5]};
`

export const ListItem = styled.li`
  cursor: pointer;

  a {
    color: ${theme.colors.white};
  }

  svg {
    &::hover {
      color: ${theme.colors.gray800};
    }
  }

  & + & {
    padding-left: ${theme.space[5]};
  }
`
