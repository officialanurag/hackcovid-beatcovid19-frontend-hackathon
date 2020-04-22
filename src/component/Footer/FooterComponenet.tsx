import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../Footer/Footer.module.css';
 
export const FooterComponent: React.FC = () => {
    return (
          <div className={styles.bg}>
             <Container >
                <div>
                    <Row>
                        <Col md={6}>
                        <div className={styles.innerfooter}>
                          <h2>Beat Covid-19</h2>
                        </div>
                        </Col>
                        <Col md={6}>
                        Beat Covid-19
                        </Col>
                    </Row>
                </div>
             </Container>
          </div>
         );
       }

    