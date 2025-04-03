import { useState } from 'react'
import './App.css'


import QuestionDisplay from './components/QuestionDisplay'
import QuestionEditor from './components/QuestionEditor'
import { Question } from './types/types'
import { questionsData } from './QuestionData'


const App: React.FC = () => {
const [isEditing, setIsEditing] = useState(true)
const [questions, setQuestions] = useState<Question[]>(questionsData)

const handleAddQuestion = (newQuestion: Question) => {
  setQuestions([...questions, {...newQuestion, id: questions.length+1}])
}

const handleDeleteQuestion = (id: number) => {
  setQuestions(questions.filter(question => question.id !== id))
}

  return (
    <div>
      <button onClick={()=> {setIsEditing(!isEditing)}}>
        {isEditing ? 'Перейти к тесту' : 'Редактировать тест'}
      </button>
      
      { isEditing ? (
        <QuestionEditor 
          questions={questions} 
          onAddQuestion={handleAddQuestion} 
          onDeleteQuestion={handleDeleteQuestion}>
        </QuestionEditor> ) : (
          <QuestionDisplay questions={questions}></QuestionDisplay>
        )
      }

    </div>
  )
}

export default App
