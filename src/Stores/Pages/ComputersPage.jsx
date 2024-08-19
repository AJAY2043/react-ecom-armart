import React from 'react';
import { computerData } from '../data/computers';
import Navbar from '../Components/Navbar';
const ComputersPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
     { computerData.map((item)=>{
        return(
            <div>
            <div className='pageImg'>
                <img src={item.image} alt="mobiles" />
            </div>
            <div className="proModel">
                {item.company},{item.model}
            </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default ComputersPage
