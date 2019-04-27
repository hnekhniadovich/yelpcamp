import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            <>
                <div id="landing-header">
                    <h1 style={{fontSize: "56px"}}>Welcome to YelpCamp!</h1>
                    <Link to="/camps" className="btn btn-lg btn-info">View All Campgounds</Link>
                </div>
                
                <ul class="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </>
        )
    }
}

export default LandingPage;