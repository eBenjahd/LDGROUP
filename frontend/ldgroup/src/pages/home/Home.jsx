import React from 'react'
import Products from '../../components/products/Products'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Products title='Nuevos esta semana'/>
        <Footer year={2025}/>
    </>
  )
}

export default Home
