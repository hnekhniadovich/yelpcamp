import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import history from '../history';

class Header extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        history.push('/');
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;
        console.log(isAuthenticated);

        const guestLinks = (
            <Nav>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Sign Up</Link>
            </Nav>
                
        )

        const authLinks = (
            <Nav>
                <p className="nav-link" style={{margin: 0}}>Hello, {user.username}</p>
                <button onClick={this.onLogoutClick.bind(this)} className="nav-link"
                    style={{backgroundColor: "#343A40", padding: 0, border: 'none'}}> Logout</button>
            </Nav>
            
        )

        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">YelpCamp</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
                    {isAuthenticated ? authLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Header);



