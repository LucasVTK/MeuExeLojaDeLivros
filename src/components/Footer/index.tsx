import { Container, Titulo } from './styles'

const Footer = () => (
  <Container>
    <Titulo>ReadTech</Titulo>
    <p>
      &copy; {new Date().getFullYear()} ReadTech. uma plataforma de venda de
      livros voltados a tecnologia, a responsabilidade
      <br /> pela entrega qualidade é dada ao vendedor do produto.
    </p>
  </Container>
)

export default Footer
