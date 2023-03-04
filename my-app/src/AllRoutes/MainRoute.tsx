import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { GamePage } from '../Page/GamePage'
import Home from '../Page/Home'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<GamePage/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute