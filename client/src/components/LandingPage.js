import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing page</h1>
            <p>Welcome to Yelpcamp</p>
            <Link to="/camps" className="btn btn-info">View All Campgounds</Link>
        </div>
    )
}

export default LandingPage;