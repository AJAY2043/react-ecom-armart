import React from 'react'
import { menData } from '../data/men'
import Navbar from '../Components/Navbar'
const MensPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {menData.map((item)=>{
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
export default MensPage
