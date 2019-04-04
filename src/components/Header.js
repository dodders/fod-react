import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fodmaps: props.fodmaps
        }
    }

    doSearch(event) {
        console.log(event.target.value);
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
                        <Form inline>
                            <FormControl size="sm" type="text" placeholder="Search" className="mr-sm-2"
                                onChange={this.doSearch} />
                            <Button size="sm" variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>;            </div>
        )
    }
}

export default Header;