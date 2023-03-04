import React from 'react';
import MainRoute from './AllRoutes/MainRoute';
import './App.css';
import {Navbar} from './Page/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoute/>
    </div>
  );
}

export default App;
