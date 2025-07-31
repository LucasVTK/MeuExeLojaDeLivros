import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderC = styled.header`
  background-color: ${cores.azulEscuro};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const Titulo = styled.h1``

export const TextoHeader = styled.h3`
  text-decoration: underline;
  margin-left: 100px;
`

export const LinhaTopo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const GrupoTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const BotaoCarrinho = styled.button`
  background: transparent;
  color: ${cores.branca};
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`
