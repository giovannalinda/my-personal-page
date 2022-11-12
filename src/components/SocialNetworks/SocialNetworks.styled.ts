import styled from 'styled-components'
import { theme } from '~/styles'

export const List = styled.ul`
  display: flex;
  gap: ${theme.space[5]};
`

export const ListItem = styled.li`
  cursor: pointer;
  padding: 0;
  color: ${theme.colors.gray800};

  a {
    color: ${theme.colors.white};
  }

  &:hover svg {
    stroke: ${theme.colors.gray400};
  }

  &:nth-child(3):hover svg {
    fill: ${theme.colors.gray400};
  }

  & + & {
    padding: 0;
  }
`
