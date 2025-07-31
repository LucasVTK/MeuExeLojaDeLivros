import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  azulEscuro: '#1e2a38',
  branca: '#fff',
  laranja: '#FFA500',
  vermelhoSuave: '#e74c3c',
  verde: '#27ae60 '
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    padding-top: 40px;
    background-color:#ccc;
    color: #f9f9f9;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`

export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
`

export const Item = styled.li`
  list-style: none;
  margin-bottom: 24px;
`
