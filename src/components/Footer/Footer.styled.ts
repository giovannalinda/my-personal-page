import styled from 'styled-components'
import { theme } from '~/styles'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${theme.space[5]};
  border-top: 1px solid ${theme.colors.gray800};
`

export const Paragraph = styled.p`
  text-align: center;
  font-size: ${theme.font.sizes.small};
  padding-top: ${theme.space[5]};
`
