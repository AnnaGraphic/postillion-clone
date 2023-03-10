import React from 'react'
import { Content, Question } from '../../interfaces'
import QuestionBlock from './QuestionBlock'

const QuestionsBlock = ( {
    quizItem
} : {
   quizItem: Content 
} ) => {
    return (
        <div>
<h2 id={String(quizItem.id)}>{quizItem.text}</h2>
<div className="questions-container">
    {quizItem?.questions.map((question: Question, _index ) => (
        <QuestionBlock
        key={_index}
        question={question}
        />
    ))}
</div>
        </div>
    )
}

export default QuestionsBlock