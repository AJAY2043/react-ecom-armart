import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
const WatchPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {watchData.map((item)=>{
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

export default WatchPage
