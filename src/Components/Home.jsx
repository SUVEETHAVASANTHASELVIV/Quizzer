import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import '../Assets/CSS/Home.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      navigate('/');
    }

    setValidated(true);
  };

  const handleChange=(event)=>{
    const { name, value } = event.target;
  

  }

  return (
    <>
    <div className='Home_Container'>
      <Container>
        <Row className='justify-content-center'>
          
          <Col lg={6} xl={7} style={{textAlign:"center"}}>
          <img src={Logo} alt='logo' id='Logo_Img' className='img-fluid'/>
      </Col>
         
      </Row>
    <Row className="justify-content-center">
        <Col lg={5} xl={6}>
      
         <Form noValidate validated={validated} onSubmit={handleSubmit} className="justify-content-center" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Sex</Form.Label>
        <Form.Select aria-label="Default select example" name='sex' onChange={(event)=>handleChange(event)} className="form-select form-select-sm">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Body Temperature in terms of Fahrenhit</Form.Label>
        <Form.Control type="number" placeholder="Eg: 100.24" required name='temperature' onChange={(event)=>handleChange(event)} />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please choose temperature for presice diagnosis.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          />
      </Form.Group>

        <Button type="submit">Submit form</Button>
     
    </Form>
    </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Home