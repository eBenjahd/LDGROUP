function SearchHeader({query, setQuery, onClose}) {
  return (
    <div className="search-header">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose}>X</button>
    </div>
  )
}

export default SearchHeader
