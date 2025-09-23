import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import FAQPage from './pages/faq/Faq';
import Checkout from './pages/checkout/Checkout';

import MenuProvider from './context/MenuContext';


function App() {

  const links = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]

  
  return (
    <>
      <MenuProvider links={links}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/faq' element={<FAQPage />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </MenuProvider>
    </>
  );
}

export default App;