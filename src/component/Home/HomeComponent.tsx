import React, { useState } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import styles from '../Home/Home.module.css';
import SignupComponent from '../Signup/SignupComponent';
import HomemaintextComponent from '../Homemaintext/HomemaintextComponent';
import { LoginComponent } from '../Login/LoginComponent';

export const HomeComponent: React.FC = () => {
  const [toggleSignupLogin, setToggleSignupLogin] = useState(true);

  const toggleState = () => setToggleSignupLogin(!toggleSignupLogin);

  return (
    <div className={styles.homeMain}>
      <div className={styles.overlay}>
        <Container >
          <div className={styles.inner}>
            <Row>
              <Col xs={12} md={8} lg={8} className='d-none d-lg-block'>
                <HomemaintextComponent />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <SignupComponent />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
