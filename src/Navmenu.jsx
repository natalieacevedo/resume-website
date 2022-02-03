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
           
           <NavLink className="link" to='/education' style={{ textDecoration: 'none' }}>Education</NavLink>

          <NavLink className="link" to='/experience' style={{ textDecoration: 'none' }}>Experience</NavLink>

          <NavLink className="link" to='/contact'style={{ textDecoration: 'none'}}>Contact</NavLink>

           <NavLink className="link" to='/projects'style={{ textDecoration: 'none'}}> Projects</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

};



export default NavBar;