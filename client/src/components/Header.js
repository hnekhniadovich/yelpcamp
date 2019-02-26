import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/">YelpCamp</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#features">Sign Up</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;