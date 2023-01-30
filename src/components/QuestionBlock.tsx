import React from 'react'
import { Question } from '../../interfaces'

const QuestionBlock = ({ 
    question 
} : {
    question : Question
}) => {
const handleClick = () => {console.log('click') } 

    return (
        <div>
            <button
            className='question-block'
            onClick={handleClick}
            >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>question.credit</a>
               // <a href=""></a>
            </p>
            </button>
        </div>
    )
}
export default QuestionBlock