import { Container, Title, Description, Button } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  nome: string
  id: string
}

const CategoryCard = ({ nome, id }: Props) => {
  return (
    <Container>
      <Title>{nome}</Title>
      <Description>
        Explore livros selecionados sobre {nome}. Clique no botão abaixo e veja
        as obras disponíveis.
      </Description>
      <Link to={`/categoria/${id}`}>
        <Button>Ver livros</Button>
      </Link>
    </Container>
  )
}

export default CategoryCard
