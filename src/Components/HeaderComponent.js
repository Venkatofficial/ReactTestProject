import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";

import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const HeaderComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Nav>
        <Navbar.Brand href="./">Home</Navbar.Brand>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/careers">Careers</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HeaderComponent;
