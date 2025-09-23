import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiment3 from './pages/Experiment3';
import Experiment4 from './pages/Experiment4';
import Experiment5 from './pages/Experiment5';
import Experiment6 from './pages/Experiment6';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiment3" element={<Experiment3 />} />
        <Route path="/experiment4" element={<Experiment4 />} />
        <Route path="/experiment5" element={<Experiment5 />} />
        <Route path="/experiment6" element={<Experiment6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
