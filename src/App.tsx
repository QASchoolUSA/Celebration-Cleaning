import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResidentialCleaning from './pages/ResidentialCleaning';
import CommercialCleaning from './pages/CommercialCleaning';
import DeepCleaning from './pages/DeepCleaning';
import PostConstructionCleaning from './pages/PostConstructionCleaning';
import MaintenanceCleaning from './pages/MaintenanceCleaning';
import GetHired from './pages/GetHired';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residential" element={<ResidentialCleaning />} />
            <Route path="/commercial" element={<CommercialCleaning />} />
            <Route path="/deep-cleaning" element={<DeepCleaning />} />
            <Route path="/post-construction" element={<PostConstructionCleaning />} />
            <Route path="/maintenance" element={<MaintenanceCleaning />} />
            <Route path="/get-hired" element={<GetHired />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;