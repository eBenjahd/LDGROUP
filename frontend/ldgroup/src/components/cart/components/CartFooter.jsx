import { Link } from 'react-router-dom'

function CartFooter({totalCartPrice, onClose}) {
  return (
    <>
        <div className='cart-footer'> 
                {totalCartPrice > 0 ? 
                <div > 
                    <h3>Total estimado <span>S/. {parseFloat(totalCartPrice)}</span> </h3>
                    <Link to="/checkout">
                        Pagar pedido
                    </Link>
                </div> :
                <div>
                    <Link to="/" onClick={onClose}> 
                        Seguir Comprando
                    </Link>
                </div>
                    }  
            </div> 
    </>
  )
}

export default CartFooter
