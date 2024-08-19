import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../Components/Navbar'
const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {fridgeData.map((item)=>{
        return(
            <div>
            <div className='pageImg'>
                <img src={item.image} alt="mobiles" />
            </div>
            <div className="proModel">
                {item.brand},{item.model}
            </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default FridgePage
