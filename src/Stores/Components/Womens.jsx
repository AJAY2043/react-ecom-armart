import React from 'react'
import { womanData } from '../data/woman'

const Womens = () => {

    const firstFiveImages=womanData.slice(0,5)
  return (
    <>
    <div className="protitle">
    <h2>Womens Fashion</h2>
    </div>
    <div className='prosection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default Womens
