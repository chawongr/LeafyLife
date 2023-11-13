import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
