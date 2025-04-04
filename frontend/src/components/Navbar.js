import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling
import CloudIcon from './icons/CloudIcon'; // Import the CloudIcon component

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="nav-item">
        <CloudIcon className="cloud-icon" />
        <Link to="/" className="nav-button">Home</Link>
      </div>

      <div className="nav-item">
        <CloudIcon className="cloud-icon" />
        <Link to="/therapistdashboard" className="nav-button">Therapists</Link>
      </div>

      <div className="nav-item">
        <CloudIcon className="cloud-icon" />
        <Link to="/clientdashboard" className="nav-button">Clients</Link>
      </div>

      <div className="nav-item">
        <CloudIcon className="cloud-icon" />
        <Link to="/sessiondashboard" className="nav-button">Sessions</Link>
      </div>

    </div>
  );
};

export default Navbar;