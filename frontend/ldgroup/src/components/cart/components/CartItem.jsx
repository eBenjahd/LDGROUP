import TrashIcon from '../../trash-icon/TrashIcon'  

function CartItem( {cartItem,eraseItem}) {
  return (
    <>
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
    </>
  )
}

export default CartItem
