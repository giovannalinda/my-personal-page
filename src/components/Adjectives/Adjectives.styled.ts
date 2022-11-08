import styled from 'styled-components'
import { theme } from '~/styles'

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40rem;
  margin-top: 40rem;
`

export const ListItem = styled.li`
  padding-bottom: ${theme.space[7]};

  &:hover {
    color: ${theme.colors.purple};
  }
`

export const Title = styled.h1`
  text-decoration: underline;
  font-size: ${theme.font.sizes.title};
  transition: ${theme.transitions.slow};

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    font-size: ${theme.font.sizes.large};
  }
`
