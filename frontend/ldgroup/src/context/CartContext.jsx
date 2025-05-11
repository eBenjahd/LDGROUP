import { createContext, useContext, useState, useEffect } from "react";
import { set } from "react-hook-form";


const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  });

  const clearData = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const eraseItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  const addToCart = (product, quantity = 1) => {

    console.log(product.image)
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity, image: product.image }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity, image: product.image }]);
    }
  };

  // 🛠️ Debug para ver qué hay en el carrito
  useEffect(() => {
    console.log("🛒 Carrito actualizado:", cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, eraseItem, clearData}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  return useContext(CartContext);
}