import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../Components/Navbar'

const Kitchen = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {kitchenData.map((item)=>{
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

export default Kitchen
