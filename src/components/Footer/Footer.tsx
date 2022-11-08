import { SocialNetworks } from '../SocialNetworks'
import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Footer>
      <SocialNetworks />
      <S.Paragraph>Giovanna Souza © Todos os direitos reservados</S.Paragraph>
    </S.Footer>
  )
}
