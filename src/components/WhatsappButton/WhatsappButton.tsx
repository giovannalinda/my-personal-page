import { BsWhatsapp } from 'react-icons/bs'

import * as S from './WhatsappButton.styled'

export function WhatsappButton() {
  return (
    <S.Container>
      <S.Link
        href='https://api.whatsapp.com/send?phone=5511970419304'
        target='_blank'
        rel='noreferrer'
      >
        <BsWhatsapp size={24} />
      </S.Link>
    </S.Container>
  )
}
