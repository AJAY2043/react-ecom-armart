import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../Components/Navbar'
const SpeakersPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {speakerData.map((item)=>{
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

export default SpeakersPage
