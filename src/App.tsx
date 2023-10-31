import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import FlightDetails from './FlightDetails';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/flight-details" element={<FlightDetails />} />
        </Routes>
    );
}

export default App;
