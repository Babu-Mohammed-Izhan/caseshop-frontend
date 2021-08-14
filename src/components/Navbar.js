import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
    return (
        <Navbar bg="white" variant="light" fixed="top" expand="sm">
            <Container>
                <Navbar.Brand href="#home">
                    Casey
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Cases</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
