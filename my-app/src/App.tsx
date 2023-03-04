import { Box } from '@chakra-ui/layout';
import React from 'react';
import MainRoute from './AllRoutes/MainRoute';
import './App.css';
import {Navbar} from './Page/Navbar';
function App() {
  return (
    <Box h="100vh" className="App">
      <Navbar/>
      <MainRoute/>
    </Box>
  );
}

export default App;
