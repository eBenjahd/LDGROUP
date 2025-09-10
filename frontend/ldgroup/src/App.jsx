// import Products from './components/products/Products';
// import Navbar from './components/nav/navbar';
import './App.scss'

import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';

import MenuProvider from './context/MenuContext';


function App() {

  const links = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]

  
  return (
    <>
      <MenuProvider links={links}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </MenuProvider>
    </>
  );
}

export default App;