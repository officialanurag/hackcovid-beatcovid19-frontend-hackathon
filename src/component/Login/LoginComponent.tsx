import React, {useState} from 'react';
import { Card, Button, Form} from 'react-bootstrap';
import styles from '../Signup/Signup.module.css';

export const LoginComponent: React.FC<{enablesignup : any}> = ({enablesignup}) => {
  const [loginInputs, setLoginInputs] = useState({
    full_name: '',
    password: ''
  });

  const handleLoginInputChange = (event: any) => { 
    event.preventDefault();
    setLoginInputs({ ...loginInputs, [event.target.name]: event.target.value});
  }

  const handleLoginSubmit = () => {
    console.log(loginInputs);
  }
    return (
          <div>
             <Card >
            <Card.Body className = {styles.primary}> 
                <Card.Title className="text-center">Login Here</Card.Title>
                <Card.Text>className="text-center"> Please Enter Your Login Datails</Card.Text>
                  <Form>
                  <Form.Group controlId="formBasicUserName">
                    <Form.Control type="text" placeholder="Enter Username" name="full_name" onChange={(e: any) => handleLoginInputChange (e)} value={loginInputs.full_name} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" name="password" onChange={(e: any) => handleLoginInputChange (e)} value={loginInputs.password} />
                    </Form.Group>
                </Form>
                <Button block onClick={() => handleLoginSubmit()} variant="outline-light">Login</Button>{' '}
                <Card.Text className="text-center" onClick = {enablesignup}><strong>Sign Up</strong> if you are a new member. </Card.Text>
            </Card.Body>
          </Card> 
          </div>
         );
       }