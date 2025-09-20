import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import NewProducts from '../../components/filter-products/NewProducts'
import ShowProducts from '../../components/show-products/showProducts'

function Home() {
  return (
    <>
        <Navbar />
        <ShowProducts />
        <NewProducts />
        <Footer year={2025}/>
    </>
  )
}

export default Home
