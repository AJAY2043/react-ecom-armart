import React from 'react'
import { menData } from '../data/men'
const Mens = () => {
    const firstFiveImages=menData.slice(0,5)
  return (
    <>
    <div className="protitle">
    <h2>Mens Fashion</h2>
    </div>
    <div className='prosection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="mens fashion" />
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}
export default Mens
