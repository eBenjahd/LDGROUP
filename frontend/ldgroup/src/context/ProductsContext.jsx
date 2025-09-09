import { createContext, useContext, useState, useEffect } from 'react'
import { fetchData } from '../utils/fetch'

const ProductsContext = createContext()

function ProductsProvider({children}) {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await fetchData(import.meta.env.VITE_GET_PRODUCTS_API_URL)
            setProducts(data)
          } catch (err) {
            setError(err)
          } finally {
            setLoading(false)
          }
        }
        fetchProducts()
      }, [])
    
      return (
        <ProductsContext.Provider value={{ products, loading, error }}>
          {children}
        </ProductsContext.Provider>
      )
}

export default ProductsProvider

export function useProducts() {
    return useContext(ProductsContext)
  }