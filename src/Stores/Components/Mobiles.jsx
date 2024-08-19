import React from 'react'
import {mobileData} from '../data/mobiles'

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0,5)


  return (
    <>
    <div className="protitle">
    <h2>Mobiles</h2>
    </div>
    <div className='prosection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="mobiles" />
                </div>
            
            )
        })
      }
    </div>
    </>
  )
}

export default Mobiles
