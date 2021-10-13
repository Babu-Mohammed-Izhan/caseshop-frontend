import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ handlecartmodal }) => {
  return (
    <Navbar bg="white" variant="light" fixed="top" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Casey
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Cases
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                handlecartmodal();
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
