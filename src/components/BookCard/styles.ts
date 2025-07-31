import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 220px;
  text-align: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
`

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
  border-radius: 4px;
`

export const Titulo = styled.h2`
  font-size: 16px;
  margin: 12px 0 4px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #666;
`

export const Botao = styled.button`
  background-color: ${cores.azulEscuro};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`

export const Preco = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2ecc71;
  margin-top: 8px;
`
