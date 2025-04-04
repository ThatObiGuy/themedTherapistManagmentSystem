import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TherapistPage from './pages/Therapist/TherapistPage';
import ClientPage from './pages/Client/ClientPage';
import SessionPage from './pages/Session/SessionPage';
import Navbar from './components/Navbar';

const App = () => { // App component

  return (
    <div className="App"> {/* Main container for the application */}
    <BrowserRouter> {/* Router component wraps the entire application to enable routing */}
      <Navbar /> {/* Navbar is always visible */}
      <Routes> {/* Routes component contains all the Route definitions */}
        <Route path="/" element={<LoginPage />} /> {/* Specifying routes for the different pages */}
        <Route path="/therapistdashboard" element={<TherapistPage />} />
        <Route path="/clientdashboard" element={<ClientPage />} />
        <Route path="/sessiondashboard" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App; // called in index.js