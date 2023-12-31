import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import '../Assets/CSS/Home.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import Navbar from './Navbar';

const Home = ({apiData,setApiData}) => {
  const [results, setResults] = useState([{id:0}]);
  const [categories, setCategories] = useState("");
  const[qnumber,setQnumber] = useState(0);
  const [showResultsList, setShowResultsList] = useState(true);
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [questionsError, setQuestionsError] = useState('');


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange=(event)=>{
    const { name, value } = event.target;
    console.log(results);
    
    
    setApiData((prevData) => ({
      ...prevData,
      category: results[0].id,
      noQuestion: value
    }));
    

    const enteredValue = parseInt(value, 10); 
  
      setQnumber(value);

      if (enteredValue < 10) {
        setQuestionsError('Questions less than 10 will not get points');
      }
      else{
        setQuestionsError('');
      }

  }


  return (
    <>
    <Navbar/>
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
        <Form.Label className='FormText'>Choose your Genre</Form.Label>

        <SearchBar setResults={setResults} categories={categories} setCategories={setCategories}/>


        {showResultsList &&results && results.length > 0 && <SearchResultsList results={results} categories={categories} setCategories={setCategories} setShowResultsList={setShowResultsList}/>}
      </Form.Group>






      <Form.Group className="mb-3" >
        <Form.Label className='FormText'>Number Of Questions</Form.Label>
        <Form.Control type="number" placeholder="Eg: 10" required name='questions' onChange={(event)=>handleChange(event)} />

        <div className="Feed" type="invalid" style={{color:'#FF0303', fontSize:"18px",fontFamily:"monospace"}}>{questionsError}</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          />
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Link to={'/quizz'}>
  <Button >Let's Start</Button>
  </Link>
</Form.Group>
     
    </Form>
    </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Home