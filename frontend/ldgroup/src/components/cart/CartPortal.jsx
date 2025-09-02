// Styles
import './CartPortal.scss'

import { createPortal } from 'react-dom'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import CloseButton from '../../assets/close-button/CloseButton'
import TrashIcon from '../../assets/trash-icon/TrashIcon'

function CartPortal({onClose}) {
    
    const {cartItems, eraseItem, handleBuy} = useCart()





    const totalCartPrice = cartItems.reduce((acc,item) => acc + item.quantity * parseFloat(item.price), 0)

  return createPortal(
    <div className='cart-portal-overlay'>
        <div className='cart-portal' onClick={(e)=> e.stopPropagation()}>
            <div className='cart-header'>
                <h2>Tu carrito  🛒</h2>
                <CloseButton onClose={onClose}/>
            </div>

            <div className='scroll'> 
            {cartItems.length === 0 ? 
                <p className='empty-cart'>El carrito está vacio...</p> 
                : (cartItems.map(cartItem => (
                    <article key={cartItem.id} className='cart-box'> 
                        {cartItem.image ? <img src={`${cartItem.image}`} alt={cartItem.name} /> : <p>No hay imagen</p>}
                        <div className='cart-info'>
                            <h4>{cartItem.name}</h4>
                            <p className='price'>Precio: S/. {cartItem.price}</p>
                            <div>
                                <p>Cantidad: {cartItem.quantity}</p>
                                <p>Total: {cartItem.quantity} x S/. {cartItem.price * cartItem.quantity}</p>
                            </div>
                        </div>
                        <TrashIcon onClick={ () => eraseItem(cartItem.id)}/>
                    </article>
            )))}
            </div>
            <div className='cart-footer'> 
                {totalCartPrice > 0 ? 
                <div > 
                    <h3>Total estimado <span>S/. {parseFloat(totalCartPrice)}</span> </h3>
                    <Link to="/checkout" ><button onClick={handleBuy} >Pagar pedido</button></Link>
                </div> :
                <div>
                    <Link to="/"> 
                        <button className='product-btn' onClick={onClose}> Seguir Comprando</button>
                    </Link>
                </div>
                    }  
            </div>

        </div>
        
    </div >,
    document.querySelector('#portal')
  )
}

export default CartPortal
