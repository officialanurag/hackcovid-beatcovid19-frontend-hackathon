import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
//import CommonClasses from '../../../src/Repository/Buttons/Commoncss.module.css'

export const NavbarComponent: React.FC = () => {
  return (
        <div>
          <header>
            <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className={styles.navbar}>
              <Container>
                  <Navbar.Brand href="#home" className= {styles.primary}>Beat Covid-19</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/precaution">Precautions</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
        </div>
       );
     }

