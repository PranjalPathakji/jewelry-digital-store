import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AboutPage } from './pages/AboutPage'
import { CartPage } from './pages/CartPage'
import { CataloguePage } from './pages/CataloguePage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'

function App() {
  return <BrowserRouter><StoreProvider><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/catalogue" element={<CataloguePage />} /><Route path="/product/:productId" element={<ProductDetailsPage />} /><Route path="/cart" element={<CartPage />} /><Route path="/about" element={<AboutPage />} /><Route path="*" element={<NotFoundPage />} /></Routes><Footer /></StoreProvider></BrowserRouter>
}

export default App
