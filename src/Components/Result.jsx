import React from 'react';
import { Table } from 'react-bootstrap';
import '../Assets/CSS/Results.css'; 

const ResultPage = ({ score, totalQuestions, correctAnswers, genre }) => {
    return(
    <div className='container Result-Container'>
    <h1 className='title text-light'>Quiz Result</h1>

    <div className='result flex-center'>
        <div className='flex'>
            <span>Username:</span>
            <span className='bold'>{}</span>
        </div>
        <div className='flex'>
            <span>Total Quiz Points : </span>
            <span className='bold'>{}</span>
        </div>
        <div className='flex'>
            <span>Total Questions : </span>
            <span className='bold'>{ }</span>
        </div>
        <div className='flex'>
            <span>Total Correct Answers : </span>
            <span className='bold'>{}</span>
        </div>
        <div className='flex'>
            <span>Total Earn Points : </span>
            <span className='bold'>{score}</span>
        </div>
    </div>

    <div className="start">
        {/* <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link> */}
    </div>
</div>
    );
};

export default ResultPage;
