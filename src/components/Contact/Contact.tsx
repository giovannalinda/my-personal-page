import { SocialNetworks } from '../SocialNetworks'

import * as S from './Contact.styled'

export function Contact() {
  return (
    <S.Container>
      <S.Title>Olá! Tudo bem?</S.Title>
      <S.Paragraph>
        Fique a vontade para me mandar uma mensagem e entrar em contato comigo
        por alguma de minhas redes.
      </S.Paragraph>
      <SocialNetworks />
    </S.Container>
  )
}
