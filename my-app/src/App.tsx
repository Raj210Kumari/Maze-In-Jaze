import React from 'react';
import './App.css';
import { GamePage } from './Page/GamePage';
// import Home from './Page/Home';
import Navbar from './Page/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <GamePage/>
    </div>
  );
}

export default App;
