import Link from 'next/link'
import * as S from './Menu.styled'

export function Menu() {
  return (
    <S.Container>
      <S.List>
        <S.ListItem>
          <Link href='/'>INÍCIO</Link>
        </S.ListItem>
        <S.ListItem>
          <Link href='/about-me'>QUEM SOU</Link>
        </S.ListItem>
        <S.ListItem>
          <Link href='/contact'>CONTATO</Link>
        </S.ListItem>
      </S.List>
    </S.Container>
  )
}
