import CategoryCard from '../components/CardCategories'

const categorias = [
  { id: 'frontend', nome: 'Front-End' },
  { id: 'backend', nome: 'Back-End' },
  { id: 'fullstack', nome: 'Full-Stack' }
]

const Home = () => (
  <div className="container">
    <h1>Categorias</h1>
    <div style={{ display: 'flex', gap: '16px' }}>
      {categorias.map((cat) => (
        <CategoryCard key={cat.id} nome={cat.nome} id={cat.id} />
      ))}
    </div>
  </div>
)

export default Home
