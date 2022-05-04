import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Home from '../Components/Home';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

<a ></a>

function NavBar() {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><Link to='/' element={<Home /> }>{<FavoriteBorderIcon />}dev_kimberly </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="https://github.com/kkimberly702" target="_blank">GitHub</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/kimberlyaguilar00/" target="_blank">LinkedIn</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="https://www.buymeacoffee.com/dev.kim" target="_blank">Buy me a coffee!</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>





    </div>
  )
}

export default NavBar;