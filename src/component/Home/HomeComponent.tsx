import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import styles from '../Home/Home.module.css';
import SignupComponent from '../Signup/SignupComponent';

export const HomeComponent: React.FC<{}> = () => {
  return (
          <div className={styles.homeMain}>
            <div className={styles.overlay}>
              <Container >
                <div className = {styles.inner}>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <p>I am Priyanka</p>
                    </Col>  
                    <Col xs={12} md={4} lg={4}>
                      <SignupComponent/>
                    </Col>
                  </Row> 
                </div>
              </Container>
            </div>
          </div>
        );
      }

