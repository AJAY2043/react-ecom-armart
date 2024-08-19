import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../Components/Navbar'
const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {booksData.map((item)=>{
        return(
            <div>
            <div className='pageImg'>
                <img src={item.image} alt="mobiles" />
            </div>
            <div className="proModel">
                {item.title},{item.model}
            </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default BooksPage
