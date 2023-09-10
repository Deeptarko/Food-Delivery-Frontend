import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import MenuSection from '../components/MenuSection/MenuSection'
import FilterSection from '../components/FilterSection/FilterSection'

const MenuPage = () => {
  return (
    <div className='page-container'>
        
        <Navbar/>
        <FilterSection/>
        <MenuSection/>
        {/* <Footer/>     */}
    </div>
  )
}

export default MenuPage