import React, { useEffect, useState } from 'react';
import '../Assets/CSS/Quizz.css';
import Logo from '../Assets/Images/Logo.png';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { Html5Entities } from 'html-entities';
import Result from './Result';

const Quiz = ({ apiData }) => {
    const [questions, setQuestions] = useState(null);
    const [index, setIndex] = useState(0);
    const [correctOption, setCorrectOption] = useState("");
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [answered, setAnswered] = useState(false); 


  
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const list = await axios.get(`https://opentdb.com/api.php?amount=11&category=23&difficulty=medium&type=multiple`);
          if (list.status !== 200) {
            throw new Error("Invalid");
          }
          setQuestions(list.data.results);
        } catch (e) {
          // Handle error
        }
      };
  
      const delay = 1000;
      const timeoutId = setTimeout(fetchQuestions, delay);
  
      return () => clearTimeout(timeoutId);
    }, []);
    const shuffleArray = (array) => {
        const shuffled = array.sort(() => Math.random() - 0.5);
        return shuffled;
      };
      const decodeHTML = (text) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
      };
    useEffect(() => {
      if (questions !== null) {
        setCorrectOption(decodeHTML(questions[index].correct_answer));
        const currentQuestion = questions[index];
      const optionsArray = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      
      const decodedOptions = optionsArray.map(option => decodeHTML(option));
      const shuffledOptions = shuffleArray(decodedOptions);
      setOptions(shuffledOptions);

      }
    }, [questions, index]);
    useEffect(() => {
      setAnswered(false); 
    }, [index]);
  
    const handleAnswerSelection = (selectedOption) => {
      if (!answered) {
        if (selectedOption === correctOption) {
    
          setScore(score + 1);
        }
       
        setAnswered(true);
        setUserAnswer(selectedOption);
        setTimeout(() => {
          setIndex((prev) => prev + 1); 
        }, 1000);
      }
    };
    const isCorrectAnswer = (option) => option === correctOption;
    const isSelectedWrongAnswer = (option) => option === userAnswer && userAnswer !== correctOption;
  

    if(index=== parseInt(apiData.noQuestion,10) )
    {
        return(
            <Result score={score} apiData={apiData} />
        )
    }
  
    else if (questions === null) {
      return null; 
    }
  
    console.log(apiData.noQuestion)
    return (
      <>
        <Container className='QuizzContainer'>
          <Row className='justify-content-center'>
            <Col lg={5} xl={6}>
              <h2 className="quiz-question" id="question">{questions[index].question}</h2>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg={5} xl={6}>
              <div className='quiz-number'>
                <span className='num'>Number of Questions: {index+1}</span>
                <br />
                <span className='num'>Number of Correct Answers: {score}</span>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg={5} xl={6}>
              <ul className="list-group quiz-options">
              {options.map((option, idx) => (
                <li key={idx}
                className={`list-group-item ${isSelectedWrongAnswer(option) ? 'wrong-answer' : ''} ${
                  isCorrectAnswer(option) && answered ? 'correct-answer' : ''
                }`}
                   onClick={() => handleAnswerSelection(option)}>{option}</li>
              ))}
              </ul>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg={5} xl={6}>
              <div className="quiz-foot">
                <button type="button" className="btn btn-primary" id="check-answer" onClick={() => {setIndex((prev) => prev + 1);
                    console.log(index);}}>Next</button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Quiz;
