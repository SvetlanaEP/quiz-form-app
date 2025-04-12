import { useState } from 'react'
import styled from 'styled-components'

import QuestionDisplay from './components/QuestionDisplay'
import QuestionEditor from './components/QuestionEditor'
import { Question } from './types/types'
import { questionsData } from './QuestionData'

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: azure;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: auto;
  margin: 20px auto;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const App: React.FC = () => {
const [isEditing, setIsEditing] = useState(true)
const [questions, setQuestions] = useState<Question[]>(questionsData)

const handleAddQuestion = (newQuestion: Question) => {
  const maxId = questions.reduce((max, q) => Math.max(max, q.id), 0)
  setQuestions([...questions, {...newQuestion, id: maxId+1}])
}

const handleDeleteQuestion = (id: number) => {
  setQuestions(questions.filter(question => question.id !== id))
}

  return (
    <AppContainer>
      { isEditing ? (
        <QuestionEditor 
          questions={questions} 
          onAddQuestion={handleAddQuestion} 
          onDeleteQuestion={handleDeleteQuestion}>
        </QuestionEditor> ) : (
          <QuestionDisplay questions={questions}></QuestionDisplay>
        )
      }
      <Button onClick={()=> {setIsEditing(!isEditing)}}>
        {isEditing ? 'Перейти к тесту' : 'Редактировать тест'}
      </Button>
    </AppContainer>
  )
}

export default App
