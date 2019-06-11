import React, { Component } from 'react';
import { 
    Navbar,
    Nav, 
} from 'react-bootstrap';

import { connect } from 'react-redux';
//import './Header.css';

class Header extends Component {
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    
                    {' Geolication Platform'}
                    </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

const reduxProps = state => {
    return ({
        auth: state.user.authUser
    })
}

export default connect(reduxProps)(Header);