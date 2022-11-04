import styled from 'styled-components'
import { theme } from '~/styles'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray800};
  z-index: 3;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.space[5]} 10rem;

  svg {
    color: ${theme.colors.white};
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  h1,
  p {
    font-size: ${theme.font.sizes.paragraph};
  }

  p {
    padding-left: ${theme.space[0]};
  }

  small {
    font-size: ${theme.font.sizes.paragraph};
  }
`

export const OpenSidebarButton = styled.button`
  background: none;
`
