import * as S from './AboutMe.styled'

export function AboutMe() {
  return (
    <S.Container>
      <S.Title>
        Giovanna Souza<span>.</span>
      </S.Title>
      <S.Occupation>
        Front-end Developer na {''}
        <S.Link href='https://www.instagram.com/hypesoftbrasil/'>
          Hypesoft
        </S.Link>
      </S.Occupation>
      <S.Paragraph>
        Olá! Prazer 💜 <br />
        <br />
        Sou uma desenvolvedora com brilho no olho, que está sempre em busca do
        próximo nível e que se empenha em trazer assuntos relevantes pra
        comunidade.
        <br />
        <br />
        Sou apaixonada por criar produtos úteis e de boa qualidade para os
        usuários, atualmente possuo 2 anos na área de desenvolvimento e ando me
        aperfeiçoando tanto na parte técnica quanto na parte de liderança de um
        time.
        <br />
        <br />
        Alguns dos meus objetivos são ter um crescimento continuo, impactar a
        vida das pessoas e construir interfaces de boa qualidade.
      </S.Paragraph>
    </S.Container>
  )
}
