import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../Components/Navbar'
const TvPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {tvData.map((item)=>{
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

export default TvPage
