import React from 'react'
import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="logo.svg"
        alt="Imagem de um átomo e React Avançado ao lado."
      ></S.Logo>
      <S.Title>react avançado a</S.Title>
      <S.Description>
        Typescript, ReactJs, Nextjs e Styled Components
      </S.Description>
      <S.Illustration
        src="hero-illustration.svg"
        alt="um desenvolvedor de frente para a tela com codigo"
      ></S.Illustration>
    </S.Wrapper>
  )
}

export default Main
