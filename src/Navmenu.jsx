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
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
         <Nav.Link href="#link">Skills</Nav.Link>
          <Nav.Link href="#link">Education</Nav.Link>
          <Nav.Link href="#link">Experience</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

};



export default NavBar;