import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUserCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const travelIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
    const userIcon = <FontAwesomeIcon icon={faUserCircle} />
    const signOutIcon = <FontAwesomeIcon icon={faPowerOff} />

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="fs-2 text-warning">{travelIcon} Holidayport</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-warning fs-4">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tours" className="text-warning fs-4">Tours</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-warning fs-4">About</Nav.Link>
                        {user?.email ?
                            <>
                                <Nav.Link as={Link} to="/myorders" className="text-warning fs-4">MyOrders</Nav.Link>
                                <Nav.Link as={Link} to="/addtour" className="text-warning fs-4">AddTour</Nav.Link>
                                <Nav.Link as={Link} to="/managetour" className="text-warning fs-4">ManageTour</Nav.Link>
                                <Button onClick={logOut} className="text-warning fs-4" variant="link">{signOutIcon}</Button>
                            </> :
                            <Nav.Link as={Link} to="/login" className="text-warning fs-4">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {userIcon} <a href="#login" className="fs-5">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;