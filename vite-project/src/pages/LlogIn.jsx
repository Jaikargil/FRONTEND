import React, {useState} from 'react';
import { Container, Button, Form } from "react-bootstrap";
import '../styles/login.css';
import { Link, useNavigate } from "react-router-dom";

const LlogIn = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    const handelChange = (e) => {
        const{name,value}=e.target
        setFormData({...formData,[name]:value
        })
      };
       const handelSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
       };
    
      return (
        <Container>
            <h1>Login Form</h1>
            <Form onSubmit={handelSubmit}>
    
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={formData.email} onChange={handelChange} required></Form.Control>
                </Form.Group>
    
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} onChange={handelChange} required></Form.Control>
                </Form.Group>
    
                <Button variant='primary' type='submit'>Login</Button>
               
    
    
            </Form>
    
        </Container>
      )
  
}

export default LlogIn
