import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';




function Intro({toggleDarkMode, isDarkMode}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
          <Container>
            <Navbar.Brand href="#home">Arundhati Singh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href='#skills'>Skills</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Button variant="primary" className="ms-2" onClick={toggleDarkMode}>Toggle {isDarkMode ? 'Light ': 'Dark '} Mode</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default Intro;