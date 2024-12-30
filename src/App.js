// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WinterTrek from './pages/WinterTrek';
import SummerTrek from './pages/SummerTrek';
import Expedition from './pages/Expedition';
import TrekDetails from './components/TrekDetails';
import './App.css';

const App = () => {
  const treks = [
    { id: 1, name: 'Winter Trek 1', summary: 'A beautiful winter trek.', details: 'Details about Winter Trek 1' },
    { id: 2, name: 'Winter Trek 2', summary: 'A challenging winter trek.', details: 'Details about Winter Trek 2' },
    { id: 3, name: 'Summer Trek 1', summary: 'A beautiful summer trek.', details: 'Details about Summer Trek 1' },
    { id: 4, name: 'Summer Trek 2', summary: 'A challenging summer trek.', details: 'Details about Summer Trek 2' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winter-trek" element={<WinterTrek />} />
        <Route path="/summer-trek" element={<SummerTrek />} />
        <Route path="/expedition" element={<Expedition />} />
        <Route path="/trek/:id" element={<TrekDetails treks={treks} />} />
      </Routes>
    </Router>
  );
};

export default App;