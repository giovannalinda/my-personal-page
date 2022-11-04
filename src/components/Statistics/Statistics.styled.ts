import styled from 'styled-components'
import { theme } from '~/styles'

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray900};
`

export const ListItem = styled.li`
  padding-bottom: ${theme.space[7]};
  margin-bottom: ${theme.space[2]};

  & + li {
    padding-left: 8rem;
  }
`

export const Title = styled.h1`
  padding-top: ${theme.space[7]};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.weigths.regular};
  padding-bottom: ${theme.space[4]};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.verySmall};
`
