import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        {/* Logo with the "Bodhini" brand name */}
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Bodhini Logo" height="40" className="d-inline-block align-top" />
          <span className="ms-2">Bodhini</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/workspaces">Workspaces</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
