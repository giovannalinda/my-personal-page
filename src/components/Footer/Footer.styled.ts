import styled from 'styled-components'
import { theme } from '~/styles'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${theme.colors.gray800};
`

export const Paragraph = styled.p`
  text-align: center;
  font-size: ${theme.font.sizes.small};
  padding-bottom: 11rem;
`
