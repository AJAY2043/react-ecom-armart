import React from 'react'
import {computerData} from '../data/computers'
const Computers = () => {
          
    const firstFiveImages=computerData.slice(0,5)

  return (
    <>
    <div className="protitle">
    <h2>computers</h2>
    </div>
    <div className='prosection'>
      {
        firstFiveImages.map((item)=>{
          return(
            <div className='imgBox'>
            <img className='proImage' src={item.image} alt="Computers" />
            </div>
          )
        })
      }
    </div>
    </>
  )
}
export default Computers
