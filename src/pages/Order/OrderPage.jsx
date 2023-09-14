import React from 'react'
import './OrderPage.css'
import Navbar from '../../components/Navbar/Navbar'
import OrderCard from '../../components/OrderCard/OrderCard'

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <div className='order-container'>
        <div className='order-header'>
          <h1 className='title'>My Orders</h1>
          <p className='description'>View all your pending and delivered orders here</p>
        </div>
        <div className=''>
          <OrderCard/>
          <OrderCard/>
        </div>
      </div>
    </>
  )
}

export default OrderPage