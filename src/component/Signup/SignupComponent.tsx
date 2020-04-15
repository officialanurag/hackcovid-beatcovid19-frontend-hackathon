import React from 'react';
import { Card, Button} from 'react-bootstrap';
import styles from '../Signup/Signup.module.css';


const SignupComponent: React.FC<{}> = () => {
      return (
        <div>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title>Signup Here</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> 
        </div>
      );
    }

  export default SignupComponent;
