import React from 'react'
import {
    Container,
    Nav ,
    Navbar as BtNavbar,
    NavDropdown
} from 'react-bootstrap'

export const NavBar = () => (
    <BtNavbar expand="lg" className="bg-body-tertiary">
        <Container>
            <BtNavbar.Brand href="/">Demo</BtNavbar.Brand>
            <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BtNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                </Nav>
                <BtNavbar.Collapse className='justify-content-end'>
                    <NavDropdown title="Account" id="basic-nav-dropdown" align='end'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item data-turbo-method='delete' href="/users/sign_out">
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </BtNavbar.Collapse>
            </BtNavbar.Collapse>
        </Container>
    </BtNavbar>       
)
