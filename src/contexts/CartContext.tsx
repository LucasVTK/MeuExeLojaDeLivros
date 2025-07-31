import { createContext, useContext, useState, ReactNode } from 'react'
import livros from '../data/Livros'

type Livro = {
  id: number
  titulo: string
  categoria: string
  preco: number
}

type CartContextType = {
  itensCarrinho: { [id: number]: number }
  adicionarAoCarrinho: (livro: Livro) => void
  removerDoCarrinho: (id: number) => void
  totalItens: number
  total: number
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itensCarrinho, setItensCarrinho] = useState<{ [id: number]: number }>(
    {}
  )

  const adicionarAoCarrinho = (livro: Livro) => {
    setItensCarrinho((prev) => ({
      ...prev,
      [livro.id]: (prev[livro.id] || 0) + 1
    }))
  }

  const removerDoCarrinho = (id: number) => {
    const novaLista = { ...itensCarrinho }
    delete novaLista[id]
    setItensCarrinho(novaLista)
  }

  const totalItens = Object.values(itensCarrinho).reduce((a, b) => a + b, 0)

  const livrosNoCarrinho = livros.filter((livro) => itensCarrinho[livro.id])

  const total = livrosNoCarrinho.reduce((acumulador: number, livro) => {
    const quantidade = itensCarrinho[livro.id]
    return acumulador + livro.preco * quantidade
  }, 0)

  return (
    <CartContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        totalItens,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
