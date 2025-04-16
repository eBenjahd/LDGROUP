import Products from './products/Products';
import NavBar from './Nav/NavBar';
import './App.scss'


function App() {

  const links = [
    { name: 'Home', url: '/' },
    { name: 'Colecciones', url: '/' },
    { name: 'Nuevo', url: '/' }
  ]

  
  return (
    <>
      <NavBar links={links} />
      <Products URL='http://localhost:8000/api/products/' title='Nuevos esta semana'/>
      <Products URL='http://localhost:8000/api/products/' title='Ultimas Unidades'/>
      <Products URL='http://localhost:8000/api/products/' title='Los más queridos!'/>
    </>
  );
}

export default App;