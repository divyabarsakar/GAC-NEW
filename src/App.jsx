import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AionV from './pages/AionV';
import AionUT from './pages/AionUT';
import GacGS8 from './pages/GacGS8';
import AionY from './pages/AionY';
import HyptecHT from './pages/HyptecHT';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models/aion-v" element={<AionV />} />
            <Route path="/models/aion-ut" element={<AionUT />} />
            <Route path="/suv/gac-gs8" element={<GacGS8 />} />
            <Route path="/suv/aion-y" element={<AionY />} />
            <Route path="/suv/hyptec-ht" element={<HyptecHT />} />
            {/* Fallback to Home for missing routes for now */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
