import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'

const WomensPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {womanData.map((item)=>{
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

export default WomensPage
