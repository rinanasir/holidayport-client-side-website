import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const travelIcon = <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="fs-2 text-warning">{travelIcon} Holidayport</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home" className="text-warning fs-4">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-warning fs-4">Tours</Nav.Link>
                        <Nav.Link href="#pricing" className="text-warning fs-4">About</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;