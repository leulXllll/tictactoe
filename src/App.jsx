import { useEffect, useState } from 'react'
import Box from './Box';
import './App.css'
import Home from './Home';
import TwoPlayer from './TwoPlayer';
import { Routes , Route } from 'react-router-dom';
import SinglePlayer from './SinglePlayer';

const Answer = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];


function App() {

  return (
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/twoplayer' element={<TwoPlayer answer={Answer}/>}/>
      <Route path='/singleplayer' element={<SinglePlayer answer={Answer}/>}/>
    </Routes>
  )

}

export default App
