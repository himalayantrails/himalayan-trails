import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WinterTrek from './pages/WinterTrek';
import SummerTrek from './pages/SummerTrek';
import Expedition from './pages/Expedition';
import ContactUs from './pages/ContactUs';
import TrekDetails from './components/TrekDetails/TrekDetails';
import './App.css';
import './mobile.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winter-trek" element={<WinterTrek />} />
        <Route path="/summer-trek" element={<SummerTrek />} />
        <Route path="/expedition" element={<Expedition />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/trekDetail/:trekDetail" element={<TrekDetails />} />
      </Routes>
    </Router>
  );
};

export default App;