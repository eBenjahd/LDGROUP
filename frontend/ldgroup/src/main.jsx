import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider  from './context/CartContext'
import ProductsProvider from './context/ProductsContext'
import './styles/reset.scss'
import './index.scss'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
