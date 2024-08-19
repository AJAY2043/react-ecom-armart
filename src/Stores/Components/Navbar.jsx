import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contex/CartContext';


const Navbar = () => {
  
     const { cartItems} = useCart()

  return (
    <>
    <div className="navsection">
        <div className="title">
          <Link to='/' style={{ textDecoration: 'none' }}>
           <h2 style={{ color: 'aquamarine', margin: 0 }}>AR-Mart</h2>
           </Link>
        </div>
        <div className="search">
          <input type='text' placeholder='search...'/>
        </div>
        <div className="user">
            signIn/SignUp
        </div>
        <Link to='/cart'>
        <div className="cart">
            Cart<span>{cartItems.length}</span>
        </div>
        </Link>
    </div>
    <div className="subMenu">
      <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
        <Link to='/watches'>
        <li>Watches</li>
        </Link>
        <Link to='/mens'>
        <li>Men's</li>
        </Link>
        <Link to='/womens'>
        <li>Women's</li>
        </Link>
        <Link to='/books'>
        <li>Books</li>
        </Link>
        <Link to='/furnitures'>
        <li>Furniters</li>
        </Link>
        <Link to='/kitchen'>
        <li>Kitchen</li>
        </Link>
        <Link to='/fridge'>
        <li>fridge</li>
        </Link>
        <Link to='/speakers'>
        <li>Speakers</li>
        </Link>
        <Link to='/ac'>
        <li>Ac</li>
        </Link>
        <Link to='/tv'>
        <li>Tv's</li>
        </Link>
        
      </ul>
    </div>
    </>
  )
}

export default Navbar
