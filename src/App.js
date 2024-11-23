import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Students from './Pages/Project';

import AboutMe from './Pages/AboutMe';
import './App.css';

const App = () => {
    return (
        <>
        
        <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/students" element={<Students />} />
                    
                   
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;