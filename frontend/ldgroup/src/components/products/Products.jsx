import useInventory from '../../hooks/useInventory';
import { useProducts } from '../../context/ProductsContext';

import './Products.scss'
import Button from './components/Button';

function Products({URL,title}) {

    const {products , loading , error } = useProducts()

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

                    {product.image ? <img src={`${product.image}`} alt={product.name} /> : <p>No hay imagen</p>}
                    <h2>{product.name}</h2>
                    <p className='price'>S/.{product.price}</p>

                    <Button  inventory={inventory} product = {{
                        ...product,
                        image: product.image ? `${product.image}` : null}}  
                    />
                </article>

            ))}
        
        </div>
    </main>
  )
}

export default Products
