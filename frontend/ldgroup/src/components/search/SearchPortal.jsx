import ReactDOM from 'react-dom'
import { useState } from 'react'
import { useProducts } from '../../context/ProductsContext'

// Styles
import './SearchPortal.scss'

function SearchPortal({ onClose }) {
  const [query, setQuery] = useState('')
  const { products, loading, error } = useProducts()

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return ReactDOM.createPortal(
    <div className="search-portal-overlay">
      <div className="search-portal">

        {/* Header */}
        <div className="search-header">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose}>✕</button>
        </div>

        {/* Scrollable results */}
        <div className="scroll">
          {loading && <p>Cargando...</p>}
          {error && <p>Error al cargar productos</p>}
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div key={p.id} className="search-box">
                {p.image ? (
                  <img
                    src={`http://localhost:8000${p.image}`}
                    alt={p.name}
                  />
                ) : (
                  <p>No hay imagen</p>
                )}
                <div className="search-info">
                  <h4>{p.name}</h4>
                  <p className="price">S/.{p.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-search">No se encontraron resultados</p>
          )}
        </div>

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