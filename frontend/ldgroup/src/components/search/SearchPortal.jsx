import { createPortal } from 'react-dom'
import { useState } from 'react'
import { useProducts } from '../../context/ProductsContext'
import useInventory from '../../hooks/useInventory'
import useDebounce from '../../hooks/useDebounce'
import SearchHeader from './components/SearchHeader'
import SearchResults from './components/SearchResults'

// Styles
import './SearchPortal.scss'

function SearchPortal({ onClose }) {
  const [query, setQuery] = useState('')
  const { products, loading, error } = useProducts()
  const inventory = useInventory(products) 

  const debounceQuery = useDebounce(query)

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debounceQuery.toLowerCase())
  )

  return createPortal(
    <div className="search-portal-overlay">
      <div className="search-portal">

        {/* Header */}
        <SearchHeader query={query} setQuery={setQuery} onClose={onClose}/>

        {/* Scrollable results */}
        <SearchResults 
          loading={loading}
          error={error}
          filtered={filtered}
          inventory={inventory}
        />

        <div className="search-footer">
          <button className="search-btn" onClick={onClose}>
            Cerrar búsqueda
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#portal')
  )
}

export default SearchPortal