import React from 'react'
import './OrderCard.css'


const OrderItem = () => {

    return <><div className='order-item-container'>
        <img src='https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg' alt='' />
        <div className='card-item'>
            <div className='item-info'>
                <div className='item-name'>Crispy Chicken Burger</div>
                <div className='item-details'>
                    <span className='item-qty'>Qty: 1</span>
                    <span className='item-price'>Rs. 249</span>
                </div>
            </div>

        </div>
        <div className='item-status'>
            <div className='status-title'>Status</div>
            <span className='status-info'>On the way</span>
        </div>

        <div className='delivery-status'>
            <div className='delivery-title'>Delivery expected by</div>
            <span className='delivery-info'>07:20 PM</span>
        </div>
    </div>
        <hr />
    </>
}

const OrderCard = () => {
    return (
        <div className='order-card-container'>
            <div className='card-header'>
                <div className='order-pill'>
                    Order <span className='order-id'>#1241247128</span>
                </div>
                <span className='order-date'>Order Placed Thu 17 Nov, 2022</span>
                <button className='btn track-btn'>Track Order</button>
            </div>
            <hr />
            <div className='order-card-item-container'>
                <OrderItem />
                <OrderItem/>
            </div>
            <div className='order-card-footer'>
                <button className='btn cancel-btn'>Cancel Order</button>
                <span className='paid-info'>Paid Using UPI</span>
                <span className='total-price'>Rs. 498</span>
            </div>
        </div>
    )
}

export default OrderCard