import { useState } from "react";
import { useCart } from "../../../context/CartContext";  
import './Button.scss';
import BagIcon from "../../../assets/BagIcon";

function Button({ product, inventory }) {
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(0);

  const available = inventory[product.id] ?? Infinity; // cantidad disponible del inventario

  const add = () => {
    if (quantity < available) {
      setQuantity(prev => prev + 1);
    } else {
      alert(`Solo hay ${available} unidades disponibles`);
    }
  };

  const remove = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const saveQuantity = () => {
    if (quantity <= 0) {
      alert("No puedes agregar un producto con cantidad 0");
      return;
    }

    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }; 

    addToCart(data, quantity, available);
    setQuantity(0); // reseteamos el contador después de agregar
  };

  return (
    <div className="button-handler">
      <div onClick={saveQuantity}>
        <span className="add-product">
          <BagIcon width={14} height={14} color='white'/>
        </span>
      </div>
      <div className="adder">
        <span className='handler' onClick={remove}>-</span>
        <span>{quantity}</span>
        <span className='handler' onClick={add}>+</span>   
      </div>
    </div>
  );
}

export default Button;