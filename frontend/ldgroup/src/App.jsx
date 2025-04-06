import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const URL = 'http://localhost:8000/api/products/';
  const [products, setProducts] = useState([]); // Estado para productos
  const [loading, setLoading] = useState(true); // Estado para cargar
  const [error, setError] = useState(null); // Estado para error

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get(URL);
        setProducts(response.data);
        setLoading(false); // Cuando los datos están listos, dejamos de cargar
      } catch (error) {
        setError('Error al cargar los productos');
        setLoading(false); // De todas formas dejamos de cargar en caso de error
      }
    };

    getProducts();
  }, []); // El arreglo vacío asegura que la llamada se haga solo una vez al cargar el componente

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>LD Group</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;