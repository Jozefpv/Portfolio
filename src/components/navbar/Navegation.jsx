import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/styleNavegation.css'
function Navegation() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="containerNavLink">
            <Nav.Link className="navLink" href="#home">ABOUT</Nav.Link>
            <Nav.Link className="navLink"  href="#features">TECH STACK</Nav.Link>
            <Nav.Link className="navLink"  href="#pricing">PROJECTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
  );
}

export default Navegation;