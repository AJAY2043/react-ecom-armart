import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

  const [selectedproduct,setSelectedproduct]= useState([])

  const cHandler =(mango)=>{
    if(selectedproduct.includes(mango)){
      setSelectedproduct(selectedproduct.filter(item=>item !==mango))
    }else{
      setSelectedproduct([...selectedproduct,mango])
    }
  }

    const filterdProducts = selectedproduct.length===0?
    mobileData : mobileData.filter((orange)=>selectedproduct.includes(orange.company))

  return (
    <>
    <Navbar/>
    <div className="fullpage">
    <div className="pro-selected">
   
   {mobileData.map((phone)=>{
    return(
      <div className='pro-input'>
        <label>
          <input type='checkbox'
          checked={selectedproduct.includes(phone.company)}
          onChange={()=>cHandler(phone.company)}
          />
          {phone.company}
        </label>
      </div>
    )
   })}

  </div>
  <div className='pagesection'>
    {filterdProducts.map((item)=>{
      return(
          <div>
            <Link to={`/mobiles/${item.id}`}>

          <div className='pageImg'>
              <img src={item.image} alt="mobiles" />
          </div>
          </Link>
          <div className="proModel">
              {item.company},{item.model}
          </div>
          </div>
      )
    })}
  </div>
    </div>
   
    </>
  )
}

export default MobilePage
