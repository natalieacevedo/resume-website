import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Collapse, NavDropdown } from "react-bootstrap";



function NavBar(){






return (
    <Navbar className='colornav' bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="ml-auto myname" href="#home">Natalie Acevedo   Web Developer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className="link" to='/' style={{ textDecoration: 'none' }}> Home</NavLink>
      <NavLink className="link" to='/skills' style={{ textDecoration: 'none' }}>Skills</NavLink>
          <Nav.Link href="#link">Education</Nav.Link>
          <Nav.Link href="#link">Experience</Nav.Link>

          <NavLink className="link" to='/contact'style={{ textDecoration: 'none'}}>Contact</NavLink>

          <Nav.Link href="#link">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

};



export default NavBar;