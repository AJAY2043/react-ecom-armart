import React from 'react'
import {watchData} from '../data/watch'

const Watchs = () => {

   const firstFiveImages=watchData.slice(0,5)
  return (
    <>
    <div className="protitle">
    <h2>Watches</h2>
    </div>
    <div className='prosection'>
        {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="watches" />
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Watchs
