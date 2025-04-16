import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider  from './context/CartContext'
import './sass/reset.scss'
import './index.scss'
import App from './components/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
