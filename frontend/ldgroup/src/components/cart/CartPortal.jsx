// Styles
import './CartPortal.scss'

import { createPortal } from 'react-dom'
import { useCart } from '../../context/CartContext'

import CartHeader from './components/CartHeader'
import CartList from './components/CartList'
import CartFooter from './components/CartFooter'

function CartPortal({onClose}) {
    
    const {cartItems, eraseItem, handleBuy} = useCart()

    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.quantity * parseFloat(item.price), 0)

  return createPortal(
    <div className='cart-portal-overlay'>
        <div className='cart-portal' onClick={(e)=> e.stopPropagation()}>

            <CartHeader onClose={onClose}/>
            <CartList cartItems={cartItems} eraseItem={eraseItem}/>
            <CartFooter totalCartPrice={totalCartPrice} onClose={onClose}/>
            
        </div>   
    </div >,
    document.querySelector('#portal')
  )
}

export default CartPortal
