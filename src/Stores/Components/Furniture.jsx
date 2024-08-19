import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {

    const firstFiveImages=furnitureData.slice(0,5)

  return (
    <>
    <div className="protitle">
    <h2>Furniture</h2>
    </div>
    <div className='prosection'>
        {
            firstFiveImages.map((item)=>{
             return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="furnituers" />
                </div>
             )
            })
        }
      
    </div>
    </>
  )
}

export default Furniture