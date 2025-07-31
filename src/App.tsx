import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categoria from '../src/pages/Categoria'
import { CartProvider } from './contexts/CartContext'

const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/categoria/:id', element: <Categoria /> }
])

function App() {
  return (
    <CartProvider>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
      <Footer />
    </CartProvider>
  )
}

export default App
