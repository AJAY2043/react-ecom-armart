import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {

    const firstFiveImages=kitchenData.slice(0,5)
  return (
    <>
    <div className='protitle'>
        <h2>Kitchen</h2>
    </div>
    <div className='prosection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="kitchen items" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Kitchen
