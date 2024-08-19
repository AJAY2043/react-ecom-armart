import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../Components/Navbar'

const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {furnitureData.map((item)=>{
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

export default FurniturePage
