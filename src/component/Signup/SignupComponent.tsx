import React from 'react';
import { Card, Button, Form} from 'react-bootstrap';
import styles from '../Signup/Signup.module.css';

const SignupComponent: React.FC = () => {
  return (
    <div>
      <Card >
        <Card.Body className={``} variant="outline-primary">
          <Card.Title className="text-center">Signup Here</Card.Title>
          <Card.Text>
            <p className="text-center"> Please fill The from to SignUp</p>
            <Form>
              <Form.Group controlId="formBasicUserName">
                <Form.Control type="username" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Control type="password" placeholder="Enter Phone Number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check inline type="radio" label="Male" />
                <Form.Check inline type="radio" label="Female" />
              </Form.Group>
            </Form>
          </Card.Text>
          <Button block variant="outline-primary">Submit</Button>{' '}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignupComponent;
