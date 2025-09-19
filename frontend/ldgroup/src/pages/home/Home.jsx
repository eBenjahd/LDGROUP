import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import NewProducts from '../../components/filter-products/NewProducts'

function Home() {
  return (
    <>
        <Navbar />
        <NewProducts />
        <Footer year={2025}/>
    </>
  )
}

export default Home
