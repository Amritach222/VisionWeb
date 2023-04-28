import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './navbar.css'
const NavBar = () => {
  return (
    <div> <Navbar fixed='top' bg="light" variant="light">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home"><img src={logo} height={'30px'} alt='Logo' /></Navbar.Brand>
        <Nav className="nav_items align-items-center d-none d-sm-flex">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#products">Our Products</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact"><Button variant='primary'>Contact us</Button></Nav.Link>
        </Nav>
      </Container>
    </Navbar></div>
  )
}

export default NavBar