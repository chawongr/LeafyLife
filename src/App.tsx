import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop'
import LogIn from './pages/LogIn';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
