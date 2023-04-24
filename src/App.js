import React from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
   <div>
    <Navbar/>
    <Header/>
    <Body/>
   </div>
  );
}

export default App;
