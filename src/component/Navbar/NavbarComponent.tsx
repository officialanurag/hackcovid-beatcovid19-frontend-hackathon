import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styles from '../Navbar/Navbar.module.css';

export const NavbarComponent: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" variant="light" bg="" fixed="top" className={styles.navbar}>
          <Container>
            <Navbar.Brand href="#home">Beat Covid-19</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">Precautions</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
