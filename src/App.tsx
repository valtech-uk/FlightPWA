import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        {/* Add other routes here */}
                    </Routes>
                </header>
            </div>
        </Router>
    );
};

export default App;
