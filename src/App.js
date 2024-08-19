import React from 'react';
import './App.css';
import LandingPage from './Stores/Pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import MobilePage from './Stores/Pages/MobilePage';
import ComputersPage from './Stores/Pages/ComputersPage'
import WatchPage from './Stores/Pages/WatchPage';
import MensPage from './Stores/Pages/MensPage';
import WomensPage from './Stores/Pages/WomensPage';
import BooksPage from './Stores/Pages/BooksPage';
import FurniturePage from './Stores/Pages/FurniturePage';
import Kitchen from './Stores/Pages/Kitchen';
import FridgePage from './Stores/Pages/FridgePage';
import SpeakersPage from './Stores/Pages/SpeakersPage';
import AcPage from './Stores/Pages/AcPage';
import TvPage from './Stores/Pages/TvPage';
import MobileSingle from './Singles/MobileSingle';
import UserCart from './Stores/UserCart';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element ={<LandingPage/>}/>
        <Route path='/mobiles' element ={<MobilePage/>}/>
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/mens' element={<MensPage/>}/>
        <Route path='/womens' element={<WomensPage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/furnitures' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/speakers' element={<SpeakersPage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>

        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='cart' element={<UserCart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
