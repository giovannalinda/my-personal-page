import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 6rem;
  margin: ${theme.space[7]};
  background: ${theme.colors.green};
  border-radius: ${theme.borderRadius.rounded};
  z-index: 3;
  transition: ${theme.transitions.slow};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`

export const Link = styled.a`
  svg {
    color: ${theme.colors.white};
  }
`
