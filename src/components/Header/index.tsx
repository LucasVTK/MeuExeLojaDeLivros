import { useState } from 'react'
import {
  HeaderC,
  Container,
  Titulo,
  TextoHeader,
  LinhaTopo,
  GrupoTitulo,
  BotaoCarrinho
} from './styles'
import { useCart } from '../../contexts/CartContext'
import CarrinhoAside from '../CarrinhoAside'

const Header = () => {
  const { totalItens } = useCart()
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)

  return (
    <HeaderC>
      <Container>
        <LinhaTopo>
          <GrupoTitulo>
            <Titulo>ReadTech</Titulo>
            <TextoHeader>Leitura inteligente para mentes curiosas.</TextoHeader>
          </GrupoTitulo>

          <BotaoCarrinho onClick={() => setMostrarCarrinho(true)}>
            Carrinho: {totalItens}
          </BotaoCarrinho>
        </LinhaTopo>
      </Container>

      <CarrinhoAside
        aberto={mostrarCarrinho}
        aoFechar={() => setMostrarCarrinho(false)}
      />
    </HeaderC>
  )
}

export default Header
