// This is our landing page, where we have buttons to navigate to the Therapists, Clients and Sessions pages.
import React from 'react'; // Import the React library - allows us to use JSX
import { Link } from 'react-router-dom'; // Import the Link component
import './LoginPage.css'; // Import the CSS file

// Define the LoginPage component
const LoginPage = () => {
  return (
    <div className="page">
      <div className="login-container">
        <h1>Therapist MGMT Application</h1>
        <Link to="/therapistdashboard"><button>Therapist</button></Link>
        <Link to="/clientdashboard"><button>Client</button></Link>
        <Link to="/sessiondashboard"><button>Session</button></Link>
      </div>
    </div>
  );
};

export default LoginPage;