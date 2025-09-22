import CartItem from './CartItem'
function CartList({ cartItems, eraseItem}) {
  return (
    <div className="scroll">
        {cartItems.length === 0 ? 
            <p className='empty-cart'>El carrito está vacio...</p> 
            : (cartItems.map(cartItem => (
                <CartItem cartItem={cartItem} eraseItem={eraseItem}/>
            )))}
    </div>
  )
}

export default CartList
