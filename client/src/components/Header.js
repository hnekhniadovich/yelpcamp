import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand">YelpCamp</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
                <Nav>
                    <Link to="/signin" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

