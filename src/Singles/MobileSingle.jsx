import React from 'react'
import { mobileData } from '../Stores/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
import { useCart } from '../Stores/Contex/CartContext'

const MobileSingle = () => {

  const {id} = useParams()

  const {addToCart,cartItems}=useCart()


  const product = mobileData.find((item)=>item.id===id)
  
  return (
    <>
    <Navbar/>
    <div className="ind-section">
      <div className="ind-image">
        <img src={product.image} alt="mobiles"/>
      </div>
      <div className="ind-detailes space">
        <div className="ind-company">
          <h2>{product.company}</h2>
        </div>
      <div className="ind-model space">
        <h3>{product.model}</h3>
      </div>
      <div className="ind-price space">
        <h3>{product.price}</h3>
      </div>
      <div className="ind-disc space">
        <p>
          {product.description}
        </p>
      </div>
      <button onClick={()=>addToCart(product)}>ADD To Cart</button>
      </div>
    </div>
    </>
    
  )
}

export default MobileSingle
