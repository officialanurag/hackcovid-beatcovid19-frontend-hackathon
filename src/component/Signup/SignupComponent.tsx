import React, {useState} from 'react';
import { Card, Button, Form} from 'react-bootstrap';
import styles from '../Signup/Signup.module.css';

export const SignupComponent: React.FC<{enablelogin : any}> = ({ enablelogin }) => {
  const [inputs, setInputs] = useState({
    full_name: '',
    phone: '',
    email: '',
    password: '',
    adhaar_id: ''
  });

  const handleInputChange = (event: any) => { 
    event.preventDefault();
    setInputs({ ...inputs, [event.target.name]: event.target.value});
  }

  const handleSubmit = () => {
    console.log(inputs);
  }

  return (
    <div>
      <Card >
        <Card.Body className = {styles.primary}> 
            <Card.Title className="text-center">Sign Up</Card.Title>
            <Card.Text className="text-center"> Please fill the form to register.</Card.Text>
            <Form>
              <Form.Group >
                <Form.Control type="text" placeholder="Enter Fullname" name="full_name" onChange={(e: any) => handleInputChange(e)} value={inputs.full_name} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e: any) => handleInputChange(e)} value={inputs.email} />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Control type="phone" placeholder="Enter Phone Number" name="phone" onChange={(e: any) => handleInputChange(e)} value={inputs.phone} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" name="password" onChange={(e: any) => handleInputChange(e)} value={inputs.password} />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control type="text" placeholder="Enter Adhaar ID" name="adhaar_id" onChange={(e: any) => handleInputChange(e)} value={inputs.adhaar_id} />
                </Form.Group>
            </Form>
            <Button block onClick={() => handleSubmit()} variant="outline-light">Submit</Button>
            <Card.Text className="text-center" onClick = {enablelogin}><strong>Click Here</strong> to Login, If you are already a member the </Card.Text>
        </Card.Body>
          
      </Card> 
    </div>
  );
}

export default SignupComponent;
