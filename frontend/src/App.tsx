import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Vans from './pages/Vans';
import About from './pages/About';
import Home from './pages/Home';

import './App.css';
import Van from './pages/Van';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
        <div></div>
      </header>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/vans/:id'
          element={<Van />}
        />
        <Route
          path='/vans'
          element={<Vans />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
