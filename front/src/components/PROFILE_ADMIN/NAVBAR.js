import React, { useEffect } from "react";
import { NavDropdown, Nav, Form, FormControl, Button, Navbar, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const NAVBAR = () => {

    return (

     
            <Navbar bg="light" expand="lg">
                <Navbar.Brand  style={{marginLeft:"40px"}} href="#">Administrator Dashborad</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavDropdown title="Notifications" id="navbarScrollingDropdown" style={{marginRight:"700px"}}>
                            <NavDropdown.Item href="#action3">Users Notifications</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Orders Notifications</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Products Notifications</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        






    );
};

export default NAVBAR;





