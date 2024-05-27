import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Shuffle from './components/Shuffle.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><Shuffle  /><Footer /></>} />
         
         
        </Routes>
      </Router>
    </div>
  );
}
export default App;
