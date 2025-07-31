import {
  CardContainer,
  Titulo,
  Descricao,
  Botao,
  Imagem,
  Preco
} from './styles'

type Props = {
  titulo: string
  categoria: string
  imagem: string
  preco: number
  onAddToCart: () => void
}

const BookCard = ({ titulo, categoria, imagem, onAddToCart, preco }: Props) => {
  return (
    <CardContainer>
      <Imagem src={imagem} alt={`Capa do livro ${titulo}`} />
      <Titulo>{titulo}</Titulo>
      <Descricao>Livro sobre {categoria}</Descricao>
      <Preco>R$ {preco.toFixed(2)}</Preco>
      <Botao onClick={onAddToCart}>Adicionar ao carrinho</Botao>
    </CardContainer>
  )
}

export default BookCard
