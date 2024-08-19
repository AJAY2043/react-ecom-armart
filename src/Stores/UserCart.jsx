import React from 'react'
import { useCart } from './Contex/CartContext'

const UserCart = () => {

    const {cartItems,addToCart}=useCart()
  return (
    <div>
      {cartItems.map((item)=>{
        return(
            <div className='cart-section'>
                <div className="cart-img">
                <img src={item.image} alt="cartitems" />
            </div>
             <div className="cart-detailes">
                <h3>{item.product}</h3>
             </div>
             <h2>{item.price}</h2>
             <h3>{item.model}</h3>

            </div>
        )
      })}
    </div>
  )
}

export default UserCart
