import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 300px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
  color: ${cores.azulEscuro};
`

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
`

export const Button = styled.button`
  background-color: ${cores.azulEscuro};
  color: ${cores.branca};
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
  transition: background 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #111b26;
  }
`
