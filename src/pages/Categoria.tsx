import { useParams } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import BookCard from '../components/BookCard'
import livros from '../data/Livros'
import { Titulo, Lista, Item } from '../styles'

const Categoria = () => {
  const { id } = useParams()
  const { adicionarAoCarrinho } = useCart()

  const livrosDaCategoria = livros.filter((livro) => livro.categoria === id)

  return (
    <div className="container">
      <Titulo>Livros da categoria: {id}</Titulo>
      <Lista>
        {livrosDaCategoria.map((livro) => (
          <Item key={livro.id}>
            <BookCard
              titulo={livro.titulo}
              categoria={livro.categoria}
              imagem={livro.imagem}
              preco={livro.preco}
              onAddToCart={() => adicionarAoCarrinho(livro)}
            />
          </Item>
        ))}
      </Lista>
    </div>
  )
}

export default Categoria
