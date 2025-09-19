import Button from '../../products/components/Button'

function SearchResults({loading,error,filtered,inventory}) {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error al cargar productos</p>
  
    return (
      <div className="scroll">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div key={p.id} className="search-box">
              {p.image ? (
                <img src={p.image} alt={p.name} />
              ) : (
                <p>No hay imagen</p>
              )}
              <div className="search-info">
                <h4>{p.name}</h4>
                <p className="price">S/.{p.price}</p>
                <Button
                  inventory={inventory}
                  product={{
                    ...p,
                    image: p.image || null,
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="empty-search">No se encontraron resultados</p>
        )}
      </div>
    )
  }
export default SearchResults
