import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sites from './Sites';
import ElementDetail from './ElementDetail';

function Home() {
  const navigate = useNavigate();
  const [pulsing, setPulsing] = useState(false);

  const handleClick = () => {
    if (pulsing) return;
    setPulsing(true);
    // La pulsation dure 0.6s, on navigue une fois terminée
    setTimeout(() => navigate('/sites'), 600);
  };

  return (
    <div className="App">
      <img
        src={logo}
        className={`Atom${pulsing ? ' Atom--pulse' : ''}`}
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/sites/:number" element={<ElementDetail />} />
    </Routes>
  );
}

export default App;
