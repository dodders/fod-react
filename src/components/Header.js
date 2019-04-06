import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fodmaps: props.fodmaps,
            doSearch: props.doSearch
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="light" fixed="top">
                    <Navbar.Brand href="#home">My Fodmaps</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="mr-auto">
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>;            </div>
        )
    }
}

export default Header;