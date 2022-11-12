import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.nav``

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[5]};
`

export const ListItem = styled.li`
  font-size: ${theme.font.sizes.large};
  text-align: left;
  transition: ${theme.transitions.slow};
  
  a {
    color: ${theme.colors.white};
    
    &:hover {
      color: ${theme.colors.gray400};
      cursor: pointer;
    }
  }

  @media (max-height: 500px) {
    font-size: ${theme.font.sizes.subtitle};
  }
`
