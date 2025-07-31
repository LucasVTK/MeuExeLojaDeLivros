import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: -400px;
  width: 300px;
  height: 100vh;
  background: #fff;
  padding: 16px;
  background-color: ${cores.azulEscuro};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 10;
  overflow-y: auto;

  &.aberto {
    right: 0;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;

      img {
        width: 60px;
        height: auto;
        border-radius: 4px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  button {
    margin-top: 16px;
  }
`

export const BotaoFechar = styled.button`
  padding: 4px;
  font-weight: bold;
`

export const BotaoCompra = styled.button`
  background-color: ${cores.verde};
  padding: 5px;
  font-weight: bold;
  margin-left: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e8a50;
  }
`

export const RemoverItem = styled.button`
  background-color: ${cores.vermelhoSuave};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  input {
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  input:focus {
    outline: none;
    border-color: ${cores.verde};
    box-shadow: 0 0 4px ${cores.verde};
  }
`

export const Linha = styled.div`
  display: flex;
  gap: 8px;
  }
`
