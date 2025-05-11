import React from 'react'
import Products from '../../components/products/Products'
import Navbar from '../../components/nav/navbar'

function Home() {
  return (
    <>
        <Navbar />
        <Products URL={'http://localhost:8000/api/products/'} title='Nuevos esta semana'/>
    </>
  )
}

export default Home
