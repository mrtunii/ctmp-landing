import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContractorsPage from './pages/ContractorsPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contractors" element={<ContractorsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;