import Axios from 'axios';
import { useState, useEffect } from 'react';
import useInventory from '../../hooks/useInventory';

import './Products.scss'
import Button from './components/Button';

function Products({URL,title}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const imageUrl = 'http://localhost:8000';

    useEffect(() =>{
        const fetchProducts = async () => {
            try {
                const response = await Axios.get(URL)
                setProducts(response.data);
                setLoading(false);
            }
            catch (error){
                setError(error);
                setLoading(false);
            }
        }

        fetchProducts()
    },[])

    const inventory = useInventory(products);

    return (

    <main>
        <h1>
            {title ? title : 'Productos'}
        </h1>
        <div className='products-cart'>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {products && products.map((product)=>(

                product.is_active &&
                <article className='product-cart' key={product.id}>

                    {product.image ? <img src={`${imageUrl}${product.image}`} alt={product.name} /> : <p>No hay imagen</p>}
                    <h2>{product.name}</h2>
                    <p className='price'>S/.{product.price}</p>

                    <Button  inventory={inventory} product = {{
                        ...product,
                        image: product.image ? `${imageUrl}${product.image}` : null}}  
                    />
                </article>

            ))}
        
        </div>
    </main>
  )
}

export default Products
